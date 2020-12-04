import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [team1goals, setTeam1goals] = useState(0)
  const [team2goals, setTeam2goals] = useState(0)

  const href = `http://localhost:3000/api/game-result.png?teams=${team1}x${team2}&result=${team1goals}x${team2goals}`

  return (
    <div>
      <Head>
        <title>Soccer Result Image Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {team1 && team1goals && team2 && team2goals && (
        <a href={href}>Get Image URL</a>
      )}
    </div>
  )
}
