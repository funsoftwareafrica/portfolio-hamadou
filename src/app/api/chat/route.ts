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

1. **Sites Web & Applications** — Sites vitrines, landing pages, SaaS, applications métier
   - Technologies : React, Next.js, TypeScript, Vue.js, Tailwind CSS

2. **E-commerce** — Boutiques en ligne complètes
   - Catalogue, panier, paiement, commandes, dashboard admin
   - Exemple : ShopMali (boutique en ligne complète)

3. **Fintech & Paiement** (EXPERTISE DIFFÉRENCIANTE)
   - Intégration Mobile Money, Stripe, portefeuilles numériques
   - Sécurité PCI-DSS, JWT/OAuth, WebSocket temps réel
   - Exemple : FinPay (plateforme de paiement Mobile Money)

4. **APIs & Backend** — Services robustes et scalables
   - REST, GraphQL, Node.js, Python, Go
   - Bases de données : PostgreSQL, MongoDB

5. **Tableaux de Bord & Analytics** — Visualisation de données
   - Dashboards interactifs, graphiques temps réel
   - Exemple : TradeDash (dashboard trading), EduPlatform (SaaS)

6. **Applications Mobiles** — iOS & Android avec une seule base de code
   - React Native
   - Exemple : AgriConnect (app de livraison avec géolocalisation)

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

Les tarifs sont personnalisés selon la complexité. Un devis détaillé est gratuit.
Paiements flexibles adaptés à chaque client.

## Méthode de travail (5 étapes)

1. **Appel découverte** — Comprendre vos besoins et objectifs
2. **Devis détaillé** — Proposition technique, planning, tarifs
3. **Développement itératif** — Livraisons régulières, feedback continu
4. **Tests rigoureux** — Tests complets, mise en production
5. **Support inclus** — Corrections gratuites après livraison

## Règles ABSOLUES

1. Toujours répondre en **français**
2. Être **professionnel mais chaleureux**
3. **STRUCTURER** tes réponses avec du **Markdown** :
   - Utilise des **titres** (##) pour séparer les sections
   - Utilise des **listes à puces** pour énumérer
   - Utilise du **gras** pour les mots importants
   - Utilise des **tableaux** quand c'est pertinent
   - Saute des **lignes** entre les sections pour aérer
4. Encourage toujours à prendre contact via le **formulaire de contact**
5. Ne donne **PAS de prix exact** sauf si on te demande un ordre de prix (utilise le tableau indicatif)
6. Si on te demande le numéro de téléphone, dis qu'il est disponible **sur demande** via email
7. Si un visiteur demande si Hamadou peut faire un projet NON-Fintech, réponds **OUI avec enthousiasme** et donne des exemples
8. Sois **concis mais informatif** — ne fais pas des réponses trop longues
9. Utilise des **emojis avec parcimonie** (1-2 par réponse, pas plus)
10. Réponds en **2-3 paragraphes maximum** sauf si on te demande une liste détaillée`

const FALLBACKS = [
  { kw: ['e-commerce','boutique','shop','vente en ligne','magasin'], r: '**Oui, absolument !** 🛒\n\nHamadou a développé **ShopMali**, une boutique en ligne complète avec :\n\n- Catalogue produits\n- Panier et paiement\n- Dashboard admin\n- Gestion des commandes\n\nVotre e-commerce sera sur mesure. Utilisez le **formulaire de contact** !' },
  { kw: ['fintech','paiement','mobile money','stripe','orange money','wave'], r: '**La Fintech est l\'expertise de Hamadou !** 💳\n\nIl a développé **FinPay** et maîtrise :\n\n- **Stripe** pour les paiements internationaux\n- **Mobile Money** (Orange Money, Wave, M-Pesa)\n- Normes de sécurité **PCI-DSS**\n\nContactez-le via le formulaire !' },
  { kw: ['mobile','app ','application','ios','android','react native'], r: '**Oui !** 📱\n\nHamadou développe des applications mobiles avec **React Native** (iOS & Android).\n\nExemple : **AgriConnect** — app de livraison avec géolocalisation.\n\nContactez-le via le formulaire !' },
  { kw: ['prix','tarif','coût','combien','budget','devis','argent','cher'], r: '**Voici un ordre de prix indicatif :** 💰\n\n| Projet | À partir de |\n|--------|-------------|\n| Site vitrine | 150 000 FCFA |\n| E-commerce | 300 000 FCFA |\n| App mobile | 500 000 FCFA |\n| SaaS | Sur devis |\n\nUn **devis personnalisé et gratuit** est établi après discussion. Contactez Hamadou via le formulaire.' },
  { kw: ['délai','temps','durée','long','combien de temps','semaine','jour'], r: '**Voici les délais habituels :** ⏱️\n\n| Projet | Délai |\n|--------|-------|\n| Site vitrine | 1-2 semaines |\n| E-commerce | 3-6 semaines |\n| App mobile | 4-8 semaines |\n| SaaS | 2-4 mois |\n\nContactez-le pour un planning précis !' },
  { kw: ['contact','email','joindre','contacter','téléphone','appeler','whatsapp'], r: '**Pour contacter Hamadou :** 📧\n\n- **Email** : abdoulatif360@gmail.com\n- **Formulaire** : en bas de cette page\n\nIl répond sous **24h** !' },
  { kw: ['service','propose','capable','competence','offre','expertise'], r: '**Hamadou propose 6 services :** 🎯\n\n1. 🌐 **Sites Web & Applications**\n2. 🛒 **E-commerce**\n3. 💳 **Fintech & Paiement**\n4. ⚙️ **APIs & Backend**\n5. 📊 **Dashboards & Analytics**\n6. 📱 **Applications Mobiles**\n\nQuel projet avez-vous en tête ?' },
  { kw: ['techno','technology','langage','stack','outil','framework','react','next','typescript','python','node'], r: '**Technologies maîtrisées :** 🛠️\n\n- **Frontend** : React, Next.js, TypeScript, Tailwind CSS, Vue.js\n- **Backend** : Node.js, Python, Go, PostgreSQL, MongoDB\n- **Mobile** : React Native (iOS & Android)\n- **DevOps** : Docker, AWS, CI/CD, Nginx, Linux\n- **Fintech** : Stripe, Mobile Money, PCI-DSS, JWT, WebSocket' },
  { kw: ['méthode','travail','processus','comment','déroule','étape','approche'], r: '**Méthode de travail en 5 étapes :** 🤝\n\n1. **Appel découverte**\n2. **Devis détaillé**\n3. **Développement itératif**\n4. **Tests rigoureux**\n5. **Support inclus**' },
  { kw: ['expérience','année','projet','réalisation','client','portfolio','travail fait'], r: '**Plus de 5 ans d\'expérience !** 💪\n\n| Projet | Type |\n|--------|------|\n| ShopMali | E-commerce |\n| EduPlatform | SaaS |\n| AgriConnect | Mobile |\n| BlogPro | Web |\n| FinPay | Fintech |\n| TradeDash | Analytics |' },
  { kw: ['bonjour','salut','hello','hey','coucou','bonsoir'], r: '**Bonjour !** 👋\n\nJe suis l\'assistant virtuel de **Hamadou Ali Abdoul-Latif**, développeur Full-Stack.\n\nQue souhaitez-vous savoir ?' },
  { kw: ['merci','thanks','merci beaucoup'], r: '**Avec plaisir !** 😊\n\nN\'hésitez pas à remplir le **formulaire de contact** en bas de la page !' },
  { kw: ['disponible','dispo','planning','quand','commencer'], r: '**Hamadou est actuellement disponible !** 🟢\n\nIl travaille en remote. Contactez-le : abdoulatif360@gmail.com' },
]

function getFallback(msg: string): string {
  const m = msg.toLowerCase()
  let best: string | null = null, score = 0
  for (const e of FALLBACKS) {
    let s = 0
    for (const k of e.kw) if (m.includes(k)) s++
    if (s > score) { score = s; best = e.r }
  }
  return best || 'Merci pour votre question ! 😊\n\nEssayez de me demander :\n- Ses **services**\n- Ses **tarifs**\n- Ses **délais**\n\nOu utilisez le **formulaire de contact** en bas de page !'
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]?.content || ''
    const apiKey = process.env.GROQ_API_KEY

    if (apiKey) {
      try {
        const res = await fetch(
          'https://api.groq.com/openai/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'llama-3.3-70b-versatile',
              messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages.map((m: { role: string; content: string }) => ({
                  role: m.role === 'assistant' ? 'assistant' : 'user',
                  content: m.content,
                })),
              ],
              temperature: 0.7,
              max_tokens: 600,
            }),
          }
        )

        const data = await res.json()
        const text = data?.choices?.[0]?.message?.content || ''
        if (text) {
          return NextResponse.json({ response: text })
        }
      } catch {
        // Groq failed, use fallback
      }
    }

    return NextResponse.json({ response: getFallback(lastMessage) })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}