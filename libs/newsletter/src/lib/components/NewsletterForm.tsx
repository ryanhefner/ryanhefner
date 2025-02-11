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
  Text,
  chakra,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().optional(),
  })
  .required()

export const NewsletterForm = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleSubmit = useCallback((data: any) => {
    setIsSubmitting(true)
    fetch('/api/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          console.error(response)
          return
        }

        setSuccess(true)
      })
      .finally(() => {
        setIsSubmitting(false)
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
    <form onSubmit={handleSubmitForm(handleSubmit)}>
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
            borderColor="gray.700"
            px={0}
            {...register('firstName')}
          />
          <FormErrorMessage>First Name is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.email?.message}>
          <FormLabel htmlFor="email" color="gray.400" fontSize="sm">
            Email{` `}
            <Text as="sup" color="red.500" fontSize="sm">
              *
            </Text>
          </FormLabel>
          <Input
            border={0}
            borderBottom="1px solid"
            borderRadius={0}
            borderColor="gray.700"
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
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            loadingText="Subscribing..."
          >
            Subscribe
          </Button>
        </Box>
      </Flex>
    </form>
  )
}
