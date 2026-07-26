import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `Tu es l'assistant IA virtuel de Hamadou Ali Abdoul-Latif, développeur Full-Stack basé en Afrique, disponible en remote.

Profil : Hamadou Ali Abdoul-Latif, développeur Full-Stack (web & mobile), 5+ ans d'expérience, expertise Fintech & Paiement, email: abdoulatif360@gmail.com, disponible freelance remote.

Services : 1) Sites Web & Apps (React, Next.js, TypeScript, Vue.js) 2) E-commerce complet 3) Fintech & Paiement (Mobile Money, Stripe, expertise) 4) APIs & Backend (REST, GraphQL, Node.js, Python, Go) 5) Dashboards & Analytics temps réel 6) Apps Mobiles (React Native iOS & Android)

Projets : ShopMali (e-commerce), EduPlatform (SaaS formation), AgriConnect (app livraison), BlogPro (CMS média), FinPay (paiement Mobile Money), TradeDash (dashboard trading).

IMPORTANT : Hamadou ne fait PAS que de la Fintech. Il est capable de TOUT type de projet web et mobile.

Tarifs : sur devis après discussion. Paiements flexibles.
Méthode : 1) Appel découverte 2) Devis 3) Dev itératif 4) Tests 5) Support post-livraison.

Règles : réponds en français, professionnel mais chaleureux, quelques emojis, encourage le contact formulaire, pas de prix exact.`

const FALLBACKS = [
  { kw: ['e-commerce','boutique','shop'], r: "Absolument ! 🛒 Hamadou a créé ShopMali, une boutique en ligne complète avec catalogue, panier et paiement. Contactez-le via le formulaire !" },
  { kw: ['fintech','paiement','mobile money','stripe'], r: "La Fintech est l'expertise de Hamadou ! 💳 FinPay, Stripe, Mobile Money, PCI-DSS. Contactez-le !" },
  { kw: ['mobile','app','ios','android'], r: "Oui ! 📱 Hamadou développe avec React Native (iOS & Android). Contactez-le !" },
  { kw: ['prix','tarif','combien','budget','devis'], r: "Les tarifs dépendent du projet. 💰 Un devis personnalisé est gratuit. Contactez Hamadou !" },
  { kw: ['délai','temps','durée','long'], r: "Site vitrine : 1-2 sem. E-commerce : 3-6 sem. App mobile : 4-8 sem. ⏱️ Contactez-le !" },
  { kw: ['contact','email','contacter','joindre'], r: "📧 abdoulatif360@gmail.com ou via le formulaire de contact en bas de la page !" },
  { kw: ['service','propose','capable'], r: "6 services : 🌐 Sites, 🛒 E-commerce, 💳 Fintech, ⚙️ APIs, 📊 Dashboards, 📱 Mobiles. Quel projet ?" },
  { kw: ['bonjour','salut','hello','hey','coucou'], r: "Bonjour ! 👋 Bienvenue sur le portfolio de Hamadou. Posez-moi des questions sur ses services !" },
  { kw: ['merci','thanks'], r: "Avec plaisir ! 😊 Le formulaire de contact est là pour vous si vous avez un projet." },
]

function getFallback(msg: string): string {
  const m = msg.toLowerCase()
  let best: string | null = null, score = 0
  for (const e of FALLBACKS) {
    let s = 0
    for (const k of e.kw) if (m.includes(k)) s++
    if (s > score) { score = s; best = e.r }
  }
  return best || "Hamadou est développeur Full-Stack polyvalent. Remplissez le formulaire de contact pour une réponse personnalisée ! 📝"
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]?.content || ''
    const apiKey = process.env.GEMINI_API_KEY

    if (apiKey) {
      try {
        const contents = messages.map((m: { role: string; content: string }) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }))

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
              contents,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 500,
              },
            }),
          }
        )

        const data = await res.json()

        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
        if (text) {
          return NextResponse.json({ response: text })
        }
      } catch {
        console.log('Gemini failed, using fallback')
      }
    }

    return NextResponse.json({ response: getFallback(lastMessage) })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}