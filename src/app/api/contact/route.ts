import { NextResponse } from 'next/server'

// Vercel ne supporte pas SQLite.
// On stocke temporairement en mémoire et on log les leads.
// Quand vous aurez un budget, ajoutez une vraie DB (Vercel Postgres gratuit ou Turso).
const leads: string[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, budget } = body

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: 'Les champs nom, email, sujet et message sont requis.' },
        { status: 400 }
      )
    }

    const lead = { name, email, phone: phone || null, subject, message, budget: budget || null, date: new Date().toISOString() }
    leads.push(JSON.stringify(lead))

    // Log pour retrouver les leads dans les logs Vercel
    console.log('📧 NOUVEAU LEAD:', JSON.stringify(lead, null, 2))
    console.log(`📋 Total leads reçus: ${leads.length}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    )
  }
}
