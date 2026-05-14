import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Security Debt Tracker',
  description: 'Track and prioritize security debt across GitHub repositories. Scan repos for vulnerabilities, calculate risk scores, and generate remediation roadmaps.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae7468a6-e24c-45a7-8b10-3b7a7636df8b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
