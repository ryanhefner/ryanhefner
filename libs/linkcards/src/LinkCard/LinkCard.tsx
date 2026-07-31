import { type Image, PageMeta, type PageMetaProps } from 'next-meta'

export interface LinkCardImageOptions {
  accountUrl?: string
  imageAlt?: string
  imageHeight?: number | string
  imageType?: string
  imageWidth?: number | string
  templateUrl: string
  url?: string
}

export interface LinkCardProps
  extends
    Omit<
      PageMetaProps,
      | 'image'
      | 'images'
      | 'imageAlt'
      | 'imageHeight'
      | 'imageUrl'
      | 'imageWidth'
    >,
    LinkCardImageOptions {}

export const createLinkCardImage = ({
  accountUrl,
  imageAlt,
  imageHeight,
  imageType,
  imageWidth,
  templateUrl,
  url,
}: LinkCardImageOptions): Image | undefined => {
  if (!accountUrl) {
    return undefined
  }

  const imageUrl = `${accountUrl.replace(/\/$/, '')}/${encodeURIComponent(
    templateUrl,
  )}${url ? `?url=${encodeURIComponent(url)}` : ''}`

  return {
    alt: imageAlt,
    height: imageHeight,
    type: imageType,
    url: imageUrl,
    width: imageWidth,
  }
}

const LinkCard = ({
  accountUrl,
  imageAlt,
  imageHeight,
  imageType,
  imageWidth,
  templateUrl,
  url,
  ...rest
}: LinkCardProps) => {
  const image = createLinkCardImage({
    accountUrl,
    imageAlt,
    imageHeight,
    imageType,
    imageWidth,
    templateUrl,
    url,
  })

  return image ? <PageMeta images={[image]} {...rest} /> : null
}

export default LinkCard
