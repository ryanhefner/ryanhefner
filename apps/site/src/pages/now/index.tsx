// import {
//   Box,
//   Heading,
//   ListItem,
//   OrderedList,
//   Text,
//   UnorderedList,
// } from '@chakra-ui/react'
// import { SiteMeta } from 'next-meta'
// import { FootnoteLink, Link } from '../../components/base'
// import { PageWrapper } from '../../components/site'
// import { PageHeading } from '../../components/typography'
// import { ProjectLink } from '../../constants'
import { allNows } from 'contentlayer/generated'
import { NowLayout } from '../../components/layouts'
import { NowPage } from '../../components/pages'

const TITLE = 'What I’m working on, now | Ryan Hefner - All Play'
const DESCRIPTION =
  'A break-down of things that I’m focusing on right now. A listing of projects that are in-development, on-going initiatives, and upcoming projects that are on the horizon.'

const NowPageIndex = ({ now }) => (
  <NowPage description={DESCRIPTION} now={now} title={TITLE} />
  // <>
  //   <SiteMeta title={TITLE} description={DESCRIPTION} />
  //   <PageWrapper>
  //     <PageHeading>Now</PageHeading>
  //     <Box my={16}>
  //       <Text fontFamily="mono">
  //         <Text
  //           as="span"
  //           fontSize="xs"
  //           fontWeight="medium"
  //           textTransform="uppercase"
  //         >
  //           Updated
  //         </Text>
  //         <br />
  //         March 17th, 2023
  //         <br />
  //         <Text as="span" color="gray.600">
  //           via Atlanta, GA
  //         </Text>
  //       </Text>
  //     </Box>
  //     <Box my={16} maxW="container.md">
  //       <Heading as="h3" fontWeight="medium" mt={16}>
  //         New library release:{` `}
  //         <Link
  //           color="blue.500"
  //           href="https://github.com/ryanhefner/react-marquease"
  //           rel="nofollow noopener noreferrer"
  //           target="_blank"
  //         >
  //           react-marquease
  //         </Link>
  //       </Heading>
  //       <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
  //         I have been working on a new library that I am really excited about.
  //         This one has been in the works for a while, and has actually had a
  //         couple versions over the years. I am not sure why it took me so long
  //         to get this out, but I have a vanila JS version, as well as a React
  //         Class version, but this is the one that I wanted to release, and
  //         actually uses the least amount of code amongst the three.
  //         <br />
  //         <br />
  //         The library is called, `react-marquease`, and it’s pretty much what it
  //         is called, an easy way to add a {`<marquee>`}-like component to your
  //         React application.
  //         <br />
  //         <br />I have already used it in both the{' '}
  //         <Link
  //           href={ProjectLink.COMMUNAL_WORKS}
  //           color="blue.500"
  //           target="_blank"
  //           rel="nofollow noopener noreferrer"
  //         >
  //           communal.works
  //         </Link>{' '}
  //         site, and even in the sub-{`<footer>`} on this site (just scroll
  //         down).
  //         <br />
  //         <br />I have a few more updates I plan on making to it, but it should
  //         be ready for normal use, and I plan on throwing this one on a bunch of
  //         sites.
  //       </Text>
  //       <Heading as="h3" fontWeight="medium" mt={16}>
  //         New project / collaboration:{' '}
  //         <Link color="blue.500" href="https://communal.works" target="_blank">
  //           communal.works
  //         </Link>
  //       </Heading>
  //       <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
  //         I have been working on a new project with a friend of mine,{' '}
  //         <Link
  //           color="blue.500"
  //           href="https://www.jon.black"
  //           target="_blank"
  //           rel="nofollow noopener noreferrer"
  //         >
  //           Jon Black
  //         </Link>
  //         . We have been exploring what a community of like-minded and socially
  //         conscience people coming together to help each other, and potentially
  //         collaborate on projects, or consulting opportunities, would look like.
  //       </Text>
  //       <UnorderedList fontSize={{ base: 'xl', md: '2xl' }} mt={8}>
  //         <ListItem>How would it operate?</ListItem>
  //         <ListItem>
  //           What system or tools could be setup to help facilitate collaboration
  //           and efficiency?
  //         </ListItem>
  //         <ListItem>How would the community grow and self-regulate?</ListItem>
  //       </UnorderedList>
  //       <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
  //         These are just a few of the questions we have been trying to put
  //         answers to. And, in the meantime we threw up a quick site where we can
  //         start answering those and defining what communal.works is.
  //       </Text>
  //       <Heading as="h3" fontWeight="medium" mt={16}>
  //         Site updates
  //       </Heading>
  //       <Text fontSize={{ base: 'xl', md: '2xl' }} maxW="container.md" mt={8}>
  //         After launching this new version of the site back in August of last
  //         year, I haven’t done many updates to it. But, over the last couple of
  //         weeks I have had a few things in motion that seemed like it warranted
  //         some updates to be made.
  //         <br />
  //         <br />
  //         With that said, here are a few of the updates I’ve made over the last
  //         week:
  //       </Text>
  //       <UnorderedList fontSize={{ base: 'xl', md: '2xl' }} mt={8}>
  //         <ListItem>
  //           Add{' '}
  //           <Link
  //             color="blue.500"
  //             href="https://casters.io"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Casters
  //           </Link>{' '}
  //           <FootnoteLink href="#footnote-1">1</FootnoteLink>
  //           {` `}
  //           to{' '}
  //           <Link href="/" color="blue.500">
  //             home
  //           </Link>{' '}
  //           and{' '}
  //           <Link href="/projects" color="blue.500">
  //             projects
  //           </Link>{' '}
  //           pages.
  //         </ListItem>
  //         <ListItem>
  //           Add new{' '}
  //           <Link href="/withoss" color="blue.500">
  //             w/ OSS
  //           </Link>{' '}
  //           (with open-source software) page.
  //           <FootnoteLink href="#footnote-2">2</FootnoteLink>
  //         </ListItem>
  //         <ListItem>
  //           Obviously, this is new <code>/now</code> page, and with that I have
  //           created an archive of previous <code>/now</code> pages. You can find
  //           a link to the previous below.
  //         </ListItem>
  //         <ListItem>
  //           I have been really happy with using{' '}
  //           <Link
  //             color="blue.500"
  //             href="https://usefathom.com"
  //             target="_blank"
  //             rel="nofollow noopener noreferrer"
  //           >
  //             Fathom
  //           </Link>{' '}
  //           on this site for analytics. I realized that I may not have had it
  //           fully integrated properly, and after reviewing the docs in the
  //           library I used to integrate it with,{` `}
  //           <Link
  //             color="blue.500"
  //             href="https://github.com/derrickreimer/fathom-client"
  //             target="_blank"
  //             rel="nofollow noopener noreferrer"
  //           >
  //             fathom-client
  //           </Link>
  //           , I realized they have a new documentation on how to set it up. So,
  //           that was updated, which is nice.
  //         </ListItem>
  //       </UnorderedList>
  //       <Heading as="h3" fontWeight="medium" mt={16}>
  //         Personal goals
  //       </Heading>
  //       <Text
  //         as="span"
  //         display="block"
  //         fontSize={{ base: 'xl', md: '2xl' }}
  //         maxW="container.md"
  //         mt={8}
  //       >
  //         <UnorderedList>
  //           <ListItem>Save weekends for kids: ✅</ListItem>
  //           <ListItem>
  //             Get final home renovations projects done, so we can move in: ✅
  //           </ListItem>
  //           <ListItem>
  //             <s>Daily trail run (weekdays)</s>
  //           </ListItem>
  //           <ListItem>
  //             <s>Daily rowing session (weekdays)</s>
  //           </ListItem>
  //           <ListItem>
  //             Daily Peloton session
  //             <FootnoteLink href="#footnote-3">3</FootnoteLink> (at least
  //             weekdays, ideally all days)
  //           </ListItem>
  //         </UnorderedList>
  //       </Text>
  //       <Heading as="h4" fontSize="2xl" fontWeight="medium" mt={24}>
  //         Footnotes
  //       </Heading>
  //       <Text
  //         as="span"
  //         display="block"
  //         fontSize={{ base: 'sm', md: 'md' }}
  //         maxW="container.md"
  //         mt={4}
  //         ml={4}
  //       >
  //         <OrderedList spacing={3}>
  //           <ListItem id="footnote-1">
  //             Casters – This is a new project I am working on. I think it’s
  //             going to be really cool, and useful, but not ready to get into all
  //             of that here/now. Expect more updates on this over the coming
  //             weeks/months.
  //           </ListItem>
  //           <ListItem id="footnote-2">
  //             w/ OSS page – This is a concept that I like and will probably be
  //             expanding on more. Don’t be surprised if some more projects spin
  //             out of this idea.
  //           </ListItem>
  //           <ListItem id="footnote-3">
  //             Daily Peloton session – Unfortunately, once we moved into our
  //             house, I had to relocate the rowing machine to a space that makes
  //             it inconvenient to use. So, luckily we also picked up a Peloton
  //             bike, and that is now my goto for exercise.
  //           </ListItem>
  //         </OrderedList>
  //       </Text>
  //     </Box>
  //   </PageWrapper>
  // </>
)

NowPageIndex.getLayout = (page) => <NowLayout>{page}</NowLayout>

export const getStaticProps = async () => {
  const now = allNows.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })[0]

  return {
    props: {
      now,
    },
  }
}

export default NowPageIndex
