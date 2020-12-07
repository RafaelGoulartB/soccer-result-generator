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
  NumberDecrementStepper,
  Divider
} from '@chakra-ui/react'

export default function Home() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [team1goals, setTeam1goals] = useState(0)
  const [team2goals, setTeam2goals] = useState(0)

  const href = `http://localhost:3000/api/game-result.png?teams=${team1}-${team2}&result=${team1goals}-${team2goals}`

  return (
    <>
      <Head>
        <title>Soccer Result Image Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDir="column" maxW="1200px" w="80%" mx="auto" mt="40">
        <Heading as="h1" textAlign="center" mx="auto" color="green.500">
          Soccer Result Image Generator
        </Heading>

        <Flex
          mt="10"
          flexDir={{ sm: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <InputGroup flexDir="column" w={{ sm: '100%', lg: '48%' }}>
            <Input
              value={team1}
              onChange={e => setTeam1(e.target.value)}
              placeholder="Team 1"
              focusBorderColor="green.200"
              size="lg"
            />
            <Flex flexDir="column" mt={{ sm: '3', lg: '6' }}>
              <Text maxW="320px" mb="2" color="blue.400" fontWeight="bold">
                {team1} Goals
              </Text>
              <NumberInput
                min={0}
                value={team1goals}
                onChange={value => setTeam1goals(parseInt(value))}
                allowMouseWheel
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </InputGroup>

          <Divider display={{ sm: 'block', lg: 'none' }} my="12" />

          <InputGroup flexDir="column" w={{ sm: '100%', lg: '48%' }}>
            <Input
              value={team2}
              onChange={e => setTeam2(e.target.value)}
              placeholder="Team 2"
              focusBorderColor="green.200"
              size="lg"
            />
            <Flex flexDir="column" mt={{ sm: '3', lg: '6' }}>
              <Text maxW="320px" mb="2" color="blue.400" fontWeight="bold">
                {team2} Goals
              </Text>
              <NumberInput
                min={0}
                value={team2goals}
                onChange={value => setTeam2goals(parseInt(value))}
                allowMouseWheel
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </InputGroup>
        </Flex>

        {team1 && team2 && (
          <Link
            href={href}
            mt="16"
            color="green.600"
            alignSelf="center"
            textAlign="center"
          >
            Get Image URL
          </Link>
        )}
      </Flex>
    </>
  )
}
