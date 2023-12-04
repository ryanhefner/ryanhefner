import { SiteMeta, SiteMetaProps } from 'next-meta'

interface LinkCardProps extends SiteMetaProps {
  accountUrl?: string
  templateUrl: string
  url?: string
}

const LinkCard = ({ accountUrl, templateUrl, url, ...rest }: LinkCardProps) => {
  if (!accountUrl) {
    return null
  }

  const imageUrl = `${accountUrl}/${encodeURIComponent(templateUrl)}${
    url ? `?url=${encodeURIComponent(url)}` : ''
  }`

  return <SiteMeta imageUrl={imageUrl} {...rest} />
}

export default LinkCard
