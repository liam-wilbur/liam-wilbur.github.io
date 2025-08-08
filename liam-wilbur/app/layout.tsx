import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Liam Wilbur | Portfolio',
    template: '%s | Liam Wilbur'
  },
  description: 'Stanford CS Student & Full Stack Developer. Specializing in creative coding, web development, and building digital experiences that solve real problems.',
  keywords: ['Liam Wilbur', 'Liam Wilbur Portfolio', 'Porfolio', 'Liam Wilbur Resume', 'Resume','Full Stack Developer', 'Stanford', 'React', 'Next.js', 'Web Development'],
  authors: [{ name: 'Liam Wilbur' }],
  creator: 'Liam Wilbur',
  metadataBase: new URL('https://liam-wilbur.github.io'),
  openGraph: {
    title: 'Liam Wilbur - Full Stack Developer',
    description: 'Stanford CS Student & Full Stack Developer specializing in creative coding and web development.',
    url: 'https://liam-wilbur.github.io',
    siteName: 'Liam Wilbur Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liam Wilbur - Full Stack Developer',
    description: 'Stanford CS Student & Full Stack Developer specializing in creative coding and web development.',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased overflow-guard`}>
        {children}
      </body>
    </html>
  )
}
