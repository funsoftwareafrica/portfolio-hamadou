import { NextResponse } from 'next/server'

const KB = [
  {
    keywords: ['bonjour', 'salut', 'hello', 'hey', 'coucou', 'bonsoir', 'yo'],
    response: "Bonjour ! 👋 Bienvenue sur le portfolio de Hamadou Ali Abdoul-Latif, développeur Full-Stack. Je peux vous parler de ses services, projets, tarifs ou méthode de travail. Que souhaitez-vous savoir ?"
  },
  {
    keywords: ['merci', 'thanks', 'merci beaucoup'],
    response: "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions. Et si vous avez un projet en tête, le formulaire de contact est là pour vous. Hamadou sera ravi d'échanger avec vous !"
  },
  {
    keywords: ['e-commerce', 'boutique', 'shop', 'vente en ligne', 'magasin en ligne', 'catalogue'],
    response: "Absolument ! 🛒 Hamadou a développé **ShopMali**, une boutique en ligne complète avec catalogue, panier, paiement et dashboard admin. Il peut créer votre e-commerce sur mesure avec toutes les fonctionnalités dont vous avez besoin : gestion de stock, paiements, commandes, comptes clients, etc. N'hésitez pas à remplir le formulaire de contact pour discuter de votre projet !"
  },
  {
    keywords: ['fintech', 'paiement', 'mobile money', 'stripe', 'orange money', 'm-pesa', 'wave', 'portefeuille'],
    response: "La Fintech est l'expertise de Hamadou ! 💳 Il a développé **FinPay**, une plateforme de paiement Mobile Money, et maîtrise Stripe, les portefeuilles numériques et les normes de sécurité PCI-DSS. Que ce soit pour intégrer des paiements, créer une app financière ou un portefeuille digital, il a l'expérience nécessaire. Contactez-le pour en discuter !"
  },
  {
    keywords: ['mobile', 'application mobile', 'app', 'ios', 'android', 'react native'],
    response: "Oui ! 📱 Hamadou développe des applications mobiles avec **React Native** (iOS & Android simultanément). Il a par exemple créé **AgriConnect**, une app de livraison avec géolocalisation. Une seule base de code pour les deux plateformes, ce qui réduit les coûts et le temps de développement. Contactez-le via le formulaire !"
  },
  {
    keywords: ['site', 'vitrine', 'landing', 'landing page', 'web', 'site web', 'site internet', 'page web'],
    response: "Bien sûr ! 🌐 Hamadou crée des sites web modernes et performants avec **Next.js, React et TypeScript**. Que ce soit un site vitrine élégant, une landing page de conversion ou une application web complète, il saura répondre à vos besoins avec un design professionnel et une navigation fluide. Contactez-le via le formulaire pour en parler !"
  },
  {
    keywords: ['saas', 'plateforme', 'dashboard', 'admin', 'back office', 'gestion'],
    response: "Oui ! Hamadou a développé **EduPlatform** (SaaS de formation) et **TradeDash** (dashboard trading temps réel). Il maîtrise la création de plateformes SaaS, dashboards interactifs avec graphiques temps réel, et back-office complets. Technologies : React, Next.js, Node.js, PostgreSQL. Contactez-le pour votre projet ! 📊"
  },
  {
    keywords: ['api', 'backend', 'back-end', 'serveur', 'node', 'python', 'go', 'base de données', 'database'],
    response: "Hamadou est solide en backend ! ⚙️ Il développe des APIs REST et GraphQL avec Node.js, Python et Go. Il maîtrise PostgreSQL, MongoDB et les architectures microservices. Que vous ayez besoin d'une API simple ou d'un système backend complexe, il peut le construire. Contactez-le !"
  },
  {
    keywords: ['prix', 'tarif', 'coût', 'combien', 'budget', 'argent', 'cher', 'moins cher', 'gratuit', 'devis'],
    response: "Les tarifs de Hamadou dépendent de la complexité du projet, de la durée et des technologies utilisées. 💰 Voici un ordre d'idée :\n\n• Site vitrine : à partir de 150 000 FCFA\n• E-commerce : à partir de 300 000 FCFA\n• Application mobile : à partir de 500 000 FCFA\n• SaaS / Plateforme : sur devis\n\nUn devis personnalisé et détaillé est établi après une première discussion gratuite. Les paiements sont flexibles et adaptés à votre situation. Contactez-le !"
  },
  {
    keywords: ['délai', 'temps', 'durée', 'combien de temps', 'long', 'rapidement', 'urgence', 'jour', 'semaine', 'mois'],
    response: "La durée dépend de la complexité du projet. ⏱️ Voici un aperçu :\n\n• Site vitrine : 1 à 2 semaines\n• E-commerce : 3 à 6 semaines\n• Application mobile : 4 à 8 semaines\n• SaaS complet : 2 à 4 mois\n\nHamadou travaille de manière itérative avec des livraisons régulières, donc vous voyez l'avancement en temps réel. Les projets urgents sont aussi possibles ! Contactez-le pour un planning détaillé."
  },
  {
    keywords: ['service', 'offre', 'propose', 'faire', 'capable', 'competence', 'expertise', 'savoir faire'],
    response: "Hamadou propose 6 services principaux :\n\n1. 🌐 **Sites Web & Applications** — Vitrine, landing pages, SaaS\n2. 🛒 **E-commerce** — Boutiques en ligne complètes\n3. 💳 **Fintech & Paiement** — Mobile Money, Stripe (expertise)\n4. ⚙️ **APIs & Backend** — REST, GraphQL, microservices\n5. 📊 **Dashboards & Analytics** — Visualisation temps réel\n6. 📱 **Applications Mobiles** — React Native (iOS & Android)\n\nLa Fintech est son expertise différenciante, mais il est capable de réaliser TOUT type de projet web/mobile. Quel projet avez-vous en tête ?"
  },
  {
    keywords: ['techno', 'technology', 'langage', 'stack', 'outil', 'framework', 'react', 'next', 'vue', 'typescript', 'tailwind'],
    response: "Voici les technologies maîtrisées par Hamadou :\n\n🔹 **Frontend** : React, Next.js, TypeScript, Tailwind CSS, Vue.js\n🔹 **Backend** : Node.js, Python, Go, PostgreSQL, MongoDB\n🔹 **Mobile** : React Native (iOS & Android)\n🔹 **DevOps** : Docker, AWS, CI/CD, Nginx, Linux\n🔹 **Fintech** : Stripe, Mobile Money, PCI-DSS, JWT/OAuth, WebSocket\n\nIl choisit toujours la technologie la plus adaptée à chaque projet."
  },
  {
    keywords: ['contact', 'email', 'téléphone', 'joindre', 'contacter', 'écrire', 'appeler', 'reach', 'whatsapp'],
    response: "Vous pouvez contacter Hamadou par :\n\n📧 **Email** : abdoulatif360@gmail.com\n📝 **Formulaire** : en bas de cette page\n⏰ Il répond généralement sous 24h !\n\nN'hésitez pas, il sera ravi d'échanger avec vous."
  },
  {
    keywords: ['méthode', 'travail', 'processus', 'comment', 'déroule', 'étape', 'approche', 'organisation'],
    response: "La méthode de travail de Hamadou en 5 étapes :\n\n1️⃣ **Appel découverte** — Comprendre vos besoins et objectifs\n2️⃣ **Proposition technique** — Architecture, devis détaillé, planning\n3️⃣ **Développement itératif** — Livraisons régulières, feedback continu\n4️⃣ **Tests & Déploiement** — Tests rigoureux, mise en production\n5️⃣ **Support post-livraison** — Corrections gratuites, assistance\n\nVous êtes impliqué à chaque étape ! 🤝"
  },
  {
    keywords: ['expérience', 'année', 'ancien', 'nombre', 'portfolio', 'projet', 'réalisation', 'client', 'travail'],
    response: "Hamadou a **plus de 5 ans d'expérience** en développement web et mobile. Voici quelques projets réalisés :\n\n🛒 **ShopMali** — E-commerce complet\n🎓 **EduPlatform** — SaaS de formation en ligne\n🚜 **AgriConnect** — App mobile de livraison avec géolocalisation\n📰 **BlogPro** — CMS personnalisé pour groupe média\n💳 **FinPay** — Plateforme de paiement Mobile Money\n📈 **TradeDash** — Dashboard trading temps réel\n\nChaque projet est une preuve de sa polyvalence !"
  },
  {
    keywords: ['disponible', 'dispo', 'occupé', 'planning', 'quand', 'commencer', 'délai de disponibilité'],
    response: "Hamadou est actuellement **disponible** pour de nouvelles missions ! 🟢 Il travaille en remote depuis l'Afrique pour des clients dans le monde entier. Plus tôt vous le contactez, plus vite votre projet peut démarrer. N'hésitez pas à lui envoyer un message !"
  },
  {
    keywords: ['météo', 'weather', 'weather app'],
    response: "Bien sûr ! Une application de météo est tout à fait réalisable. 🌤️ Hamadou peut créer une app mobile (React Native) ou web (Next.js) avec :\n\n• Géolocalisation automatique\n• Prévisions en temps réel via API météo\n• Design moderne et intuitif\n• Notifications d'alertes météo\n\nEnvoyez-lui un message via le formulaire pour discuter des détails et obtenir un devis !"
  },
  {
    keywords: ['réseaux sociaux', 'réseau social', 'social media', 'facebook', 'instagram', 'tiktok', 'twitter'],
    response: "Hamadou peut développer des fonctionnalités de réseaux sociaux (fil d'actualité, messagerie, profils, etc.) ou intégrer des APIs de réseaux sociaux dans votre application. 📱 Contactez-le pour discuter de votre projet spécifique !"
  },
  {
    keywords: ['seo', 'référencement', 'google', 'positionnement', 'visibilité', 'trafic'],
    response: "Chaque site développé par Hamadou intègre les bonnes pratiques SEO de base : structure sémantique HTML, métadonnées, performance de chargement, responsive design. 📈 Pour un SEO avancé (stratégie de contenu, backlinks, analytics), il peut aussi mettre en place des outils comme Google Analytics et Search Console. Contactez-le !"
  }
]

function getResponse(message: string): string {
  const msg = message.toLowerCase()
  let bestMatch = null
  let bestScore = 0

  for (const entry of KB) {
    let score = 0
    for (const kw of entry.keywords) {
      if (msg.includes(kw)) score++
    }
    if (score > bestScore) {
      bestScore = score
      bestMatch = entry
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.response

  if (msg.length < 5) {
    return "Pouvez-vous reformuler votre question ? Je peux vous parler des services, projets, tarifs ou de la méthode de travail de Hamadou. 😊"
  }

  return `Merci pour votre question ! Hamadou est un développeur Full-Stack polyvalent capable de réaliser votre projet. 

Pour une réponse plus précise, essayez de me poser une question sur :
• Ses **services** (site web, e-commerce, app mobile...)
• Ses **projets** réalisés
• Ses **tarifs** et délais
• Sa **méthode de travail**

Ou remplissez directement le **formulaire de contact** en bas de la page pour parler directement à Hamadou ! 📝`
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
    }
    const lastMessage = messages[messages.length - 1]?.content || ''
    const response = getResponse(lastMessage)
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}