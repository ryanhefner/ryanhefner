import { Button, Icon } from '@chakra-ui/react'
import type { ButtonProps } from '@chakra-ui/react'
import { IoPauseSharp, IoPlaySharp } from 'react-icons/io5'

export enum PlayButtonSize {
  SMALL = 'SMALL',
  LARGE = 'LARGE',
}
interface PlayButtonProps extends Omit<ButtonProps, 'size'> {
  isActive?: boolean
  isPlaying?: boolean
  size?: PlayButtonSize
}

export const PlayButton = ({
  isActive,
  isPlaying,
  size = PlayButtonSize.SMALL,
  ...rest
}: PlayButtonProps) => {
  return (
    <Button
      aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
      border="1px solid"
      borderColor={isActive ? 'black' : 'gray.500'}
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={size === PlayButtonSize.LARGE ? 12 : 8}
      h={size === PlayButtonSize.LARGE ? 12 : 8}
      p={0}
      minW={0}
      pos="relative"
      variant="ghost"
      {...rest}
    >
      <Icon
        as={isPlaying ? IoPauseSharp : IoPlaySharp}
        color={isActive ? 'black' : 'gray.500'}
        ml={isPlaying ? '0' : '3px'}
        w={size === PlayButtonSize.LARGE ? 6 : 4}
        h={size === PlayButtonSize.LARGE ? 6 : 4}
      />
    </Button>
  )
}
