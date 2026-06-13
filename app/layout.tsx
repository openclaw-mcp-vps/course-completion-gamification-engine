import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Course Completion Gamification Engine',
  description: 'Gamify online course completion with smart rewards. AI-driven achievement systems, badges, and motivational nudges for course creators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cbd89792-bb95-414b-92a6-721810e94f7e"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
