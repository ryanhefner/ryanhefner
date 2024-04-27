import { useCallback, useState } from 'react'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  chakra,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const Form = chakra('form')

const schema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
  })
  .required()

export const NewsletterForm = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSubmit = useCallback((data: any) => {
    console.debug(data)

    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        console.error(response)
        return
      }

      setSuccess(true)
    })
  }, [])

  if (success) {
    return (
      <Heading textAlign="center" mt={4}>
        Thank you!
      </Heading>
    )
  }

  return (
    <Form onSubmit={handleSubmitForm(handleSubmit)}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="flex-start"
        gap={4}
        mt={6}
      >
        <FormControl isInvalid={!!errors.firstName?.message}>
          <FormLabel htmlFor="firstName" color="gray.400" fontSize="sm">
            First Name
          </FormLabel>
          <Input
            border={0}
            borderBottom="1px solid"
            borderRadius={0}
            borderColor="gray.800"
            px={0}
            {...register('firstName')}
          />
          <FormErrorMessage>First Name is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email?.message}>
          <FormLabel htmlFor="email" color="gray.400" fontSize="sm">
            Email
          </FormLabel>
          <Input
            border={0}
            borderBottom="1px solid"
            borderRadius={0}
            borderColor="gray.800"
            px={0}
            {...register('email')}
          />
          <FormErrorMessage>Email is required</FormErrorMessage>
        </FormControl>
        <Box mt={{ base: 0, md: 7 }}>
          <Button
            type="submit"
            bg="red.500"
            color="white"
            flex="0 0 auto"
            borderRadius="sm"
          >
            Subscribe
          </Button>
        </Box>
      </Flex>
    </Form>
  )
}
