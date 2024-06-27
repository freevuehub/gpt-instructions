'use server'

import { headers } from 'next/headers'

const Home = async () => {
  const header = headers()
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

  return (
    <main className="flex h-screen items-center justify-center">
      <p>{ip}</p>
    </main>
  )
}

export default Home
