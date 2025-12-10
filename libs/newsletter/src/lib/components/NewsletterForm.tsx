import { useCallback, useRef, useState } from 'react'

import { Box, Button, Field, Flex, Input, Text, chakra } from '@chakra-ui/react'
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
          <Field.Root invalid={!!errors.firstName?.message}>
            <chakra.label htmlFor="firstName" color={labelColor} fontSize="sm">
              First Name
            </chakra.label>
            <Input
              id="firstName"
              border={0}
              borderBottom="1px solid"
              borderRadius={0}
              borderColor={borderColor}
              px={0}
              {...register('firstName')}
            />
            {errors.firstName?.message && (
              <chakra.div color="red.500" fontSize="sm" mt={1}>
                First Name is required
              </chakra.div>
            )}
          </Field.Root>
          <Field.Root invalid={!!errors.email?.message}>
            <chakra.label htmlFor="email" color={labelColor} fontSize="sm">
              Email{` `}
              <Text as="sup" color="red.500" fontSize="sm">
                *
              </Text>
            </chakra.label>
            <Input
              id="email"
              type="email"
              border={0}
              borderBottom="1px solid"
              borderRadius={0}
              borderColor={borderColor}
              px={0}
              {...register('email')}
            />
            {errors.email?.message && (
              <chakra.div color="red.500" fontSize="sm" mt={1}>
                Email is required
              </chakra.div>
            )}
          </Field.Root>
          <Box mt={{ base: 0, md: 7 }} w={{ base: 'full', md: 'auto' }}>
            <Button
              type="submit"
              bg="red.500"
              color="white"
              flex="0 0 auto"
              borderRadius="sm"
              loading={isSubmitting}
              disabled={isSubmitting}
              _hover={{ bg: 'red.400' }}
              w={{ base: 'full', md: 'auto' }}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
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
