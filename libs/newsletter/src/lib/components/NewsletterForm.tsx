import { FormEvent, useCallback } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  chakra,
} from '@chakra-ui/react'

const Form = chakra('form')

export const NewsletterForm = () => {
  const handleSubmit = useCallback((evt: FormEvent) => {}, [])

  return (
    <Form onSubmit={handleSubmit}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="flex-end"
        gap={4}
        mt={6}
      >
        <FormControl>
          <FormLabel htmlFor="firstName" color="gray.400" fontSize="sm">
            First Name
          </FormLabel>
          <Input
            type="text"
            id="name"
            name="firstName"
            border={0}
            borderBottom="1px solid"
            borderRadius={0}
            borderColor="gray.800"
            px={0}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" color="gray.400" fontSize="sm">
            Email
          </FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            border={0}
            borderBottom="1px solid"
            borderRadius={0}
            borderColor="gray.800"
            px={0}
          />
        </FormControl>
        <Button
          type="submit"
          bg="red.500"
          color="white"
          flex="0 0 auto"
          borderRadius="sm"
        >
          Subscribe
        </Button>
      </Flex>
    </Form>
  )
}
