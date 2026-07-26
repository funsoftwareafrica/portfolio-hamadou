import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'portfolio-hamadou.zip')
    const buffer = readFileSync(filePath)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="portfolio-hamadou.zip"',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Fichier non trouvé.' }, { status: 404 })
  }
}
