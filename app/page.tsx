'use server'

import { headers } from 'next/headers'
import { promises as fs } from 'fs'
import { pipe, join } from '@fxts/core'

const Home = async () => {
  const header = headers()
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  const foo = await fs.readdir('/Users/freevue/Desktop/Project/frieren-ai')

  // console.log(os)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{ip}</p>
      {pipe(foo, join('/'))}
    </main>
  )
}

export default Home
