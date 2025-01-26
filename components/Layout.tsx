import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Hirely</title>
        <link rel="icon" href="/hirely-icon.png" />
      </Head>
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Hirely</Link>
          <div className="space-x-4">
            <Link href="/profile" className="hover:underline">Profile</Link>
            <Link href="/matches" className="hover:underline">Matches</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

