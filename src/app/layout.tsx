import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - The Workshop Surface Company',
    default: 'The Workshop Surface Company - Premium Vuba Stone Solutions',
  },
  description: 'The Workshop Surface Company - Flood-resistant, environmentally-friendly Vuba Stone surfacing systems for Florida and the Southeast.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
