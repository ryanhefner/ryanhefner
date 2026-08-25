import { allThoughts } from 'content-collections'

import { PostLayout, SiteLayout } from '../../components/layouts'

const ThoughtPage = ({ thought }) => {
  return <PostLayout thought={thought} />
}

ThoughtPage.getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export const getStaticPaths = async () => {
  const paths = allThoughts.map((thought) => ({
    params: { slug: [thought.slug] },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug
  const thought = allThoughts.find((thought) => thought.slug === slug)

  return {
    props: {
      thought,
    },
  }
}

export default ThoughtPage
