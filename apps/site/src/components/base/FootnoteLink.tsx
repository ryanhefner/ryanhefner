import { chakra } from '@chakra-ui/react'

import { Link } from '.'

const Sup = chakra('sup', {
  fontSize: '50%',
  top: '-12px',
})

const FootnoteLink = ({ children, href, ...rest }) => (
  <Link href={href} color="blue.500" {...rest}>
    <Sup>{children}</Sup>
  </Link>
)

export default FootnoteLink
