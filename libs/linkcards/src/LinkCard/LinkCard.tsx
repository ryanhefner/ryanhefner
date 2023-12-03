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

  return (
    <SiteMeta
      imageUrl={`${accountUrl}/${encodeURIComponent(
        url,
      )}.jpg?url=${encodeURIComponent(url)}`}
      {...rest}
    />
  )
}

export default LinkCard
