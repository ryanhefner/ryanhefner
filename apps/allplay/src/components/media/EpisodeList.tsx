import { useCallback, useContext } from 'react'

import { Flex, HTMLChakraProps, Heading } from '@chakra-ui/react'

import { PodcastPlayerContext } from '../../contexts'
import {
  type PodcastListEpisode,
  getEpisodeAudioUrl,
} from '../../utils/podcast'

import { AudioPlayer } from './AudioPlayer'

interface EpisodeListProps extends Omit<HTMLChakraProps<'div'>, 'direction'> {
  episodes: PodcastListEpisode[]
  title?: string
}

export const EpisodeList = ({
  episodes = [],
  title,
  ...rest
}: EpisodeListProps) => {
  const { currentEpisode, setCurrentEpisode } = useContext(PodcastPlayerContext)

  const handlePlay = useCallback(
    (episodeId: string) => {
      const episode = episodes.find((i) => i.guid === episodeId)

      if (episode) {
        setCurrentEpisode(episode)
      }
    },
    [episodes, setCurrentEpisode],
  )

  return (
    <Flex flexDir="column" gap={1.5} {...rest}>
      <Heading as="h2" color="gray.400" fontSize="lg" mb={2}>
        {title ?? 'Episodes'}
      </Heading>
      {episodes.map((item) => (
        <AudioPlayer
          key={item.guid}
          duration={parseInt(String(item.itunes.duration ?? 0), 10)}
          isSelected={currentEpisode?.guid === item.guid}
          slug={item.link.split('/').pop() ?? item.guid}
          title={item.title}
          url={getEpisodeAudioUrl(item) ?? item.enclosure.url}
          onPlay={() => handlePlay(item.guid)}
        />
      ))}
    </Flex>
  )
}
