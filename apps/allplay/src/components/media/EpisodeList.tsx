import { useCallback, useContext } from 'react'

import { ChakraProps, Flex, Heading } from '@chakra-ui/react'

import { AudioPlayer } from './AudioPlayer'
import { PodcastPlayerContext } from '../../contexts'

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
      const episode = episodes.find((i) => i.id === episodeId)

      setCurrentEpisode(episode)
    },
    [episodes, setCurrentEpisode],
  )

  return (
    <Flex flexDir="column" gap={1.5} {...rest}>
      <Heading as="h2" color="gray.400" fontSize="lg" mb={2}>
        {title ?? 'Episodes'}
      </Heading>
      {episodes.map((episode: any, index: number) => (
        <AudioPlayer
          key={episode.id}
          duration={episode.attributes.duration}
          isSelected={currentEpisode?.id === episode.id}
          slug={episode.attributes.slug}
          title={episode.attributes.title}
          url={`${episode.attributes.media_url}?src=allplay.fm`}
          onPlay={() => handlePlay(episode.id)}
        />
      ))}
    </Flex>
  )
}
