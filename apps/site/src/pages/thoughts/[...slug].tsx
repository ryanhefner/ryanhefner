import { allThoughts } from 'contentlayer/generated'
import { PostLayout } from '../../components/layouts'

const ThoughtPage = ({ thought }) => {
  return <PostLayout thought={thought} />
}

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
