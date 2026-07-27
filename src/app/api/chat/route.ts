import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `Tu es l'assistant IA virtuel de Hamadou Ali Abdoul-Latif, un développeur Full-Stack basé en Afrique, disponible en remote pour des clients dans le monde entier.

## Informations essentielles

**Nom** : Hamadou Ali Abdoul-Latif
**Métier** : Développeur Full-Stack Web & Mobile
**Expérience** : 5+ ans
**Email** : abdoulatif360@gmail.com
**Statut** : Disponible pour de nouvelles missions
**Localisation** : Afrique (travail remote international)

## Services proposés

1. **Sites Web & Applications** — Sites vitrines, landing pages, SaaS, applications métier (React, Next.js, TypeScript, Vue.js, Tailwind CSS)

2. **E-commerce** — Boutiques en ligne complètes avec catalogue, panier, paiement, commandes, dashboard admin. Exemple : ShopMali

3. **Fintech & Paiement** (EXPERTISE DIFFÉRENCIANTE) — Mobile Money, Stripe, portefeuilles numériques, PCI-DSS, JWT/OAuth. Exemple : FinPay

4. **APIs & Backend** — REST, GraphQL, Node.js, Python, Go, PostgreSQL, MongoDB

5. **Tableaux de Bord & Analytics** — Dashboards interactifs, graphiques temps réel. Exemples : TradeDash, EduPlatform

6. **Applications Mobiles** — React Native (iOS & Android). Exemple : AgriConnect

## Projets réalisés

| Projet | Type | Description |
|--------|------|-------------|
| ShopMali | E-commerce | Boutique en ligne complète |
| EduPlatform | SaaS | Plateforme de formation en ligne |
| AgriConnect | Mobile | App livraison avec géolocalisation |
| BlogPro | Web | CMS personnalisé pour groupe média |
| FinPay | Fintech | Plateforme de paiement Mobile Money |
| TradeDash | Analytics | Dashboard trading temps réel |

## Tarifs indicatifs

| Type de projet | À partir de |
|----------------|-------------|
| Site vitrine | 150 000 FCFA |
| E-commerce | 300 000 FCFA |
| Application mobile | 500 000 FCFA |
| SaaS / Plateforme | Sur devis |

Les tarifs sont personnalisés. Un devis détaillé est gratuit. Paiements flexibles.

## Méthode de travail (5 étapes)

1. **Appel découverte** — Comprendre vos besoins et objectifs
2. **Devis détaillé** — Proposition technique, planning, tarifs
3. **Développement itératif** — Livraisons régulières, feedback continu
4. **Tests rigoureux** — Tests complets, mise en production
5. **Support inclus** — Corrections gratuites après livraison

## Règles ABSOLUES

1. Toujours répondre en **français**
2. Être **professionnel mais chaleureux**
3. **STRUCTURER** tes réponses avec du **Markdown** : titres (##), listes à puces, **gras** pour les mots importants, **tableaux** quand pertinent, lignes vides entre sections pour aérer
4. Encourage le contact via le **formulaire de contact**
5. Si on demande un ordre de prix, utilise le tableau indicatif ci-dessus
6. Si on demande le téléphone, dis qu'il est disponible **sur demande** via email
7. Si on demande un projet NON-Fintech, réponds **OUI avec enthousiasme** et donne des exemples
8. Sois **concis** — 2-3 paragraphes max sauf si on demande une liste détaillée
9. Utilise des **emojis avec parcimonie** (1-2 par réponse max)
10. Réponds avec un ton **confiant et professionnel**`

const FALLBACKS = [
  { kw: ['e-commerce','boutique','shop','vente'], r: '**Oui, absolument !** 🛒\n\nHamadou a développé **ShopMali**, une boutique en ligne complète :\n\n- Catalogue produits\n- Panier et paiement\n- Dashboard admin\n- Gestion des commandes\n\nUtilisez le **formulaire de contact** pour en discuter !' },
  { kw: ['fintech','paiement','mobile money','stripe','orange money','wave'], r: "**L'expertise de Hamadou !** 💳\n\nIl a créé **FinPay** et maîtrise :\n\n- **Stripe** (paiements internationaux)\n- **Mobile Money** (Orange Money, Wave, M-Pesa)\n- Sécurité **PCI-DSS**\n\nContactez-le via le formulaire !" },
  { kw: ['mobile','app ','ios','android'], r: '**Oui !** 📱\n\nHamadou développe avec **React Native** (iOS & Android simultanément).\n\nExemple : **AgriConnect** — app de livraison avec géolocalisation.\n\nContactez-le via le formulaire !' },
  { kw: ['prix','tarif','coût','combien','budget','devis','cher'], r: '**Ordre de prix indicatif :** 💰\n\n| Projet | À partir de |\n|--------|-------------|\n| Site vitrine | 150 000 FCFA |\n| E-commerce | 300 000 FCFA |\n| App mobile | 500 000 FCFA |\n| SaaS | Sur devis |\n\nUn **devis personnalisé et gratuit** après discussion. Contactez-le !' },
  { kw: ['délai','temps','durée','long','semaine'], r: '**Délais habituels :** ⏱️\n\n| Projet | Délai |\n|--------|-------|\n| Site vitrine | 1-2 semaines |\n| E-commerce | 3-6 semaines |\n| App mobile | 4-8 semaines |\n| SaaS | 2-4 mois |\n\nLivraisons régulières pendant le développement !' },
  { kw: ['contact','email','joindre','contacter','téléphone'], r: '**Pour contacter Hamadou :** 📧\n\n- **Email** : abdoulatif360@gmail.com\n- **Formulaire** : en bas de cette page\n\nRéponse sous **24h** !' },
  { kw: ['service','propose','capable','competence','offre'], r: '**6 services :** 🎯\n\n1. 🌐 Sites Web & Applications\n2. 🛒 E-commerce\n3. 💳 Fintech & Paiement *(expertise)*\n4. ⚙️ APIs & Backend\n5. 📊 Dashboards & Analytics\n6. 📱 Applications Mobiles\n\nQuel projet avez-vous en tête ?' },
  { kw: ['techno','langage','stack','framework','react','next','python','node'], r: '**Technologies :** 🛠️\n\n- **Frontend** : React, Next.js, TypeScript, Tailwind CSS\n- **Backend** : Node.js, Python, Go, PostgreSQL, MongoDB\n- **Mobile** : React Native (iOS & Android)\n- **DevOps** : Docker, AWS, CI/CD\n- **Fintech** : Stripe, Mobile Money, PCI-DSS' },
  { kw: ['méthode','travail','processus','déroule','étape'], r: '**Méthode en 5 étapes :** 🤝\n\n1. Appel découverte\n2. Devis détaillé\n3. Développement itératif\n4. Tests rigoureux\n5. Support inclus\n\nVous êtes impliqué à chaque étape !' },
  { kw: ['expérience','année','projet','réalisation','portfolio'], r: "**5+ ans d'expérience !** 💪\n\n| Projet | Type |\n|--------|------|\n| ShopMali | E-commerce |\n| EduPlatform | SaaS |\n| AgriConnect | Mobile |\n| BlogPro | Web |\n| FinPay | Fintech |\n| TradeDash | Dashboard |" },
  { kw: ['bonjour','salut','hello','hey','coucou'], r: "**Bonjour !** 👋\n\nJe suis l'assistant de **Hamadou Ali Abdoul-Latif**, développeur Full-Stack.\n\nPosez-moi des questions sur ses **services**, **tarifs** ou **méthode de travail** !" },
  { kw: ['merci','thanks'], r: "**Avec plaisir !** 😊\n\nSi vous avez un projet, remplissez le **formulaire de contact** en bas de la page !" },
  { kw: ['disponible','dispo','quand','commencer'], r: "**Disponible maintenant !** 🟢\n\nHamadou travaille en remote pour le monde entier.\n\nEmail : abdoulatif360@gmail.com" },
]

function getFallback(msg: string): string {
  const m = msg.toLowerCase()
  let best: string | null = null, score = 0
  for (const e of FALLBACKS) {
    let s = 0
    for (const k of e.kw) if (m.includes(k)) s++
    if (s > score) { score = s; best = e.r }
  }
  return best || "Merci pour votre question ! 😊\n\nDemandez-moi :\n- Ses **services**\n- Ses **tarifs**\n- Ses **délais**\n\nOu remplissez le **formulaire de contact** en bas de page !"
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]?.content || ''
    const apiKey = process.env.GEMINI_API_KEY || 'AQ.Ab8RN6ItDVt4cpt7kwVcal2_oLq5vFu_Ne42ii3nM5UUG6YanQ'

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
                maxOutputTokens: 600,
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