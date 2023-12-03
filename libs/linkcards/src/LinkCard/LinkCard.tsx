import { usePathname } from 'next/navigation'
import { SiteMeta, SiteMetaProps } from 'next-meta'

interface LinkCardProps extends SiteMetaProps {
  accountUrl: string
  siteUrl: string
}

const LinkCard = ({ accountUrl, siteUrl, ...rest }: LinkCardProps) => {
  const pathname = usePathname()

  const isHome = pathname === '/'
  const url = isHome ? siteUrl : `${siteUrl}${pathname}`
  const imageUrl = `${accountUrl}/${encodeURIComponent(
    url,
  )}.jpg?url=${encodeURIComponent(url)}`

  console.debug(imageUrl)

  return <SiteMeta imageUrl={imageUrl} {...rest} />
}

export default LinkCard
