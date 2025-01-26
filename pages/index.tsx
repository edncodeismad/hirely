import { Layout } from '../components/Layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hirely</h1>
        <p className="mb-8">Hiring dating app</p>
        <Link 
          href="/profile" 
          className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
        >
          Create Profile
        </Link>
      </div>
    </Layout>
  )
}

