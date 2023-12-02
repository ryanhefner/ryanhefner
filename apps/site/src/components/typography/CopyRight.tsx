import { Text } from '@chakra-ui/react'

export const CopyRight = ({
  copy = '',
  minimalLength = 80,
  optimalLength = 160,
}) => {
  const good = copy.slice(0, optimalLength)
  const bad = copy.slice(optimalLength)
  const goodGap = good.length - minimalLength

  const goodGapFill =
    goodGap < 0
      ? Array(goodGap * -1 + (goodGap * -1).toString().length - 2)
          .fill('')
          .map((_, index) => (
            <Text
              as="span"
              key={`good-gap-${index}`}
              bgColor="yellow.300"
              color="yellow.800"
            >
              &nbsp;
              {index === 0 && `+${goodGap * -1}`}
            </Text>
          ))
      : []

  return (
    <>
      {good}
      <Text as="span" bgColor="red.100" color="red.800">
        {bad}
      </Text>
      {goodGapFill}
    </>
  )
}
