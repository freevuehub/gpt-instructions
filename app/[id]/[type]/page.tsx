'use server'

import { promises as fs } from 'fs'
import { pipe, map, toArray, split, zipWithIndex } from '@fxts/core'

type Props = {
  params: {
    id: string
    type: string
  }
}

const Text = async (props: Props) => {
  const file = await fs.readFile(
    `${process.env.ROOT || ''}/Doc/${props.params.id}/ko-${props.params.type}.txt`,
    'utf8'
  )

  return (
    <main>
      {pipe(
        file,
        split('\n'),
        zipWithIndex,
        map(([index, text]) => <p key={index}>{text}</p>),
        toArray
      )}
    </main>
  )
}

export default Text
