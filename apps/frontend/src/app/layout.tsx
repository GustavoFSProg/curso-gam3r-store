import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const font = Montserrat({
    subsets: ['latin'],
})

export const metadata: Metadata = {
        title: `The True Gammer Store`,
    description: 'Versão completa da loja Gam3r.store',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={font.className}>{children}</body>
        </html>
    )
}
