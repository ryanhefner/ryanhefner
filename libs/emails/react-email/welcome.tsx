import { Emails, type EmailsProps, previewProps } from '../src/lib/emails'

function WelcomePreview(props: EmailsProps) {
  return <Emails {...props} />
}

WelcomePreview.PreviewProps = previewProps

export default WelcomePreview
