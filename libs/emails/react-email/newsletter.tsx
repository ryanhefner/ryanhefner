import {
  NewsletterEmail,
  type NewsletterEmailProps,
  previewProps,
} from '../src/lib/newsletter.email'

function NewsletterPreview(props: NewsletterEmailProps) {
  return <NewsletterEmail {...props} />
}

NewsletterPreview.PreviewProps = previewProps

export default NewsletterPreview
