import { NextResponse } from 'next/server'

function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase()
  if (msg.includes('e-commerce') || msg.includes('boutique') || msg.includes('shop')) {
    return "Absolument ! 🛒 Hamadou a développé ShopMali, une boutique en ligne complète. Il peut créer votre e-commerce sur mesure. Remplissez le formulaire de contact !"
  }
  if (msg.includes('fintech') || msg.includes('paiement') || msg.includes('mobile money') || msg.includes('stripe')) {
    return "La Fintech est l'expertise de Hamadou ! 💳 Il maîtrise Stripe, Mobile Money et les normes PCI-DSS. Contactez-le !"
  }
  if (msg.includes('mobile') || msg.includes('app') || msg.includes('application')) {
    return "Oui ! 📱 Hamadou développe des apps mobiles avec React Native (iOS & Android). Contactez-le via le formulaire !"
  }
  if (msg.includes('site') || msg.includes('vitrine') || msg.includes('landing') || msg.includes('web')) {
    return "Bien sûr ! 🌐 Hamadou crée des sites web modernes avec Next.js, React et TypeScript. Contactez-le !"
  }
  if (msg.includes('prix') || msg.includes('tarif') || msg.includes('budget') || msg.includes('combien')) {
    return "Les tarifs dépendent de la complexité du projet. 💰 Un devis personnalisé est établi après discussion. Contactez Hamadou !"
  }
  if (msg.includes('service')) {
    return "Hamadou offre 6 services : Sites Web, E-commerce, Fintech, APIs, Dashboards, Apps Mobiles. Quel projet avez-vous en tête ? 😊"
  }
  if (msg.includes('contact') || msg.includes('email') || msg.includes('contacter')) {
    return "Contactez Hamadou par email à abdoulatif360@gmail.com 📧 ou via le formulaire de contact en bas de la page !"
  }
  if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello')) {
    return "Bonjour ! 👋 Bienvenue sur le portfolio de Hamadou. Posez-moi des questions sur ses services ou tarifs !"
  }
  if (msg.includes('merci')) {
    return "Avec plaisir ! 😊 N'oubliez pas de remplir le formulaire de contact si vous avez un projet. Hamadou sera ravi d'échanger avec vous !"
  }
  return "Merci pour votre question ! 😊 Pour une réponse personnalisée, remplissez le formulaire de contact. Hamadou vous répondra directement !"
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages invalides.' }, { status: 400 })
    }
    const lastMessage = messages[messages.length - 1]?.content || ''
    const response = getFallbackResponse(lastMessage)
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Erreur interne.' }, { status: 500 })
  }
}
