import { useCallback, useContext } from 'react'

import { ChakraProps, Flex, Heading } from '@chakra-ui/react'

import { PodcastPlayerContext } from '../../contexts'

import { AudioPlayer } from './AudioPlayer'

interface EpisodeListProps extends ChakraProps {
  episodes: any[]
  title?: string
}

export const EpisodeList = ({
  episodes = [],
  title,
  ...rest
}: EpisodeListProps) => {
  const { currentEpisode, setCurrentEpisode } = useContext(PodcastPlayerContext)

  const handlePlay = useCallback(
    (episodeId: number) => {
      const episode = episodes.find((i) => i.guid === episodeId)

      setCurrentEpisode(episode)
    },
    [episodes, setCurrentEpisode],
  )

  return (
    <Flex flexDir="column" gap={1.5} {...rest}>
      <Heading as="h2" color="gray.400" fontSize="lg" mb={2}>
        {title ?? 'Episodes'}
      </Heading>
      {episodes.map((item: any, index: number) => (
        <AudioPlayer
          key={item.guid}
          duration={parseInt(item.itunes.duration ?? 0, 10)}
          isSelected={currentEpisode?.guid === item.guid}
          slug={item.link.split('/').pop()}
          title={item.title}
          url={`${item.enclosure.url}?src=allplay.fm`}
          onPlay={() => handlePlay(item.guid)}
        />
      ))}
    </Flex>
  )
}
