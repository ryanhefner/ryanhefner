import { Button, Icon } from '@chakra-ui/react'
import type { ButtonProps } from '@chakra-ui/react'
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5'

interface PlayButtonProps extends ButtonProps {
  isPlaying?: boolean
}

export const PlayButton = ({ isPlaying, ...rest }: PlayButtonProps) => {
  return (
    <Button
      border="1px solid"
      borderColor="gray.500"
      borderRadius="full"
      w={8}
      h={8}
      p={0}
      minW={0}
      pos="relative"
      variant="ghost"
      {...rest}
    >
      <Icon
        as={isPlaying ? IoPauseSharp : IoPlaySharp}
        color={isPlaying ? 'black' : 'gray.500'}
        pos="absolute"
        left={isPlaying ? '7px' : 2}
      />
    </Button>
  )
}
