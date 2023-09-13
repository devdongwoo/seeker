"use client"
import Layout from "./components/units/layout"
import "./globals.css"
import { Providers } from "./redux/provider"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>롤 전적 검색</title>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
      <meta name="description" content="Description" />
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
