import './globals.css'
import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Porta mio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
