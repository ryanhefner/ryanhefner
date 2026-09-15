import {
  ThankYouEmail,
  type ThankYouEmailProps,
  previewProps,
} from '../src/lib/thank-you.email'

function ThankYouPreview(props: ThankYouEmailProps) {
  return <ThankYouEmail {...props} />
}

ThankYouPreview.PreviewProps = previewProps

export default ThankYouPreview
