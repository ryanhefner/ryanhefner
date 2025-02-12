import { useCallback, useRef, useState } from 'react'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Marquee from 'react-marquease'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup.string().email().required(),
    firstName: yup.string().optional(),
  })
  .required()

export const NewsletterForm = ({
  variant = 'dark',
}: {
  variant?: 'dark' | 'light'
}) => {
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [transition, setTransition] = useState<'in' | 'out'>('in')

  const formRef = useRef<HTMLFormElement>(null)

  const borderColor = variant === 'light' ? 'gray.300' : 'gray.700'
  const labelColor = variant === 'light' ? 'gray.600' : 'gray.400'

  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const reset = useCallback(() => {
    setTransition('out')

    setTimeout(() => {
      setSuccess(false)
      setIsSubmitting(false)
      formRef.current?.reset()
    }, 0)

    setTimeout(() => {
      setTransition('in')
    }, 500)
  }, [])

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

        setTimeout(() => {
          reset()
        }, 10000)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }, [])

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmitForm(handleSubmit)}>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems="flex-start"
          gap={{ base: 6, md: 4 }}
          mt={6}
        >
          <FormControl isInvalid={!!errors.firstName?.message}>
            <FormLabel htmlFor="firstName" color={labelColor} fontSize="sm">
              First Name
            </FormLabel>
            <Input
              border={0}
              borderBottom="1px solid"
              borderRadius={0}
              borderColor={borderColor}
              px={0}
              {...register('firstName')}
            />
            <FormErrorMessage>First Name is required</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email?.message}>
            <FormLabel htmlFor="email" color={labelColor} fontSize="sm">
              Email{` `}
              <Text as="sup" color="red.500" fontSize="sm">
                *
              </Text>
            </FormLabel>
            <Input
              type="email"
              border={0}
              borderBottom="1px solid"
              borderRadius={0}
              borderColor={borderColor}
              px={0}
              {...register('email')}
            />
            <FormErrorMessage>Email is required</FormErrorMessage>
          </FormControl>
          <Box mt={{ base: 0, md: 7 }} w={{ base: 'full', md: 'auto' }}>
            <Button
              type="submit"
              bg="red.500"
              color="white"
              flex="0 0 auto"
              borderRadius="sm"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              loadingText="Subscribing..."
              _hover={{ bg: 'red.400' }}
              w={{ base: 'full', md: 'auto' }}
            >
              Subscribe
            </Button>
          </Box>
        </Flex>
      </form>
      <Flex
        pos="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        bg="green.500"
        alignItems="center"
        pointerEvents={success ? 'auto' : 'none'}
        transition="clip-path 0.35s ease-in-out"
        style={{
          clipPath: success
            ? 'rect(0 auto auto 0)'
            : transition === 'out'
              ? 'rect(100% auto auto 0)'
              : 'rect(0 auto 0 0)',
        }}
      >
        <Box w="full" overflow="clip">
          <Marquee>
            <Text
              color="green.900"
              fontSize={{ base: '9xl', md: '9xl' }}
              letterSpacing="-5px"
              whiteSpace="nowrap"
            >
              Thank You!&nbsp;&nbsp;☺︎&nbsp;&nbsp;
            </Text>
          </Marquee>
        </Box>
      </Flex>
    </>
  )
}
