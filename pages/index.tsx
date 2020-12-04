import React, { useState } from 'react'
import Head from 'next/head'
import {
  Link,
  Flex,
  Heading,
  InputGroup,
  Text,
  Input,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberDecrementStepper
} from '@chakra-ui/react'

export default function Home() {
  const [team1, setTeam1] = useState('fef')
  const [team2, setTeam2] = useState('fefe')
  const [team1goals, setTeam1goals] = useState(0)
  const [team2goals, setTeam2goals] = useState(0)

  const href = `http://localhost:3000/api/game-result.png?teams=${team1}x${team2}&result=${team1goals}x${team2goals}`

  return (
    <div>
      <Head>
        <title>Soccer Result Image Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDir="column" maxW="1200px" w="80%" mx="auto" mt="80">
        <Heading as="h1" textAlign="center" mx="auto">
          Soccer Result Image Generator
        </Heading>

        <Flex>
          <InputGroup flexDir="column">
            <Input
              value={team1}
              onChange={e => setTeam1(e.target.value)}
              placeholder="Team 1"
              size="lg"
            />
          </InputGroup>

          <InputGroup flexDir="column">
            <Input
              value={team2}
              onChange={e => setTeam2(e.target.value)}
              placeholder="Team 1"
              size="lg"
            />
          </InputGroup>
        </Flex>

        <Flex>
          <Flex flexDir="column" mr="12">
            <Text maxW="320px">{team1}</Text>
            <NumberInput
              min={0}
              value={team1goals}
              onChange={value => setTeam1goals(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>

          <Flex flexDir="column">
            <Text maxW="320px">{team2}</Text>
            <NumberInput
              min={0}
              value={team2goals}
              onChange={value => setTeam2goals(parseInt(value))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Flex>

        {team1 && team2 && <Link href={href}>Get Image URL</Link>}
      </Flex>
    </div>
  )
}
