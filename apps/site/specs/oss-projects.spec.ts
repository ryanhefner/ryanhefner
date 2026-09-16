import { oss } from '../src/data/projects'

describe('open-source projects', () => {
  it.each(['react-fathom', 'react-structured'])(
    'lists %s once with a direct GitHub repository link',
    (name) => {
      const matchingProjects = oss.filter((project) => project.name === name)

      expect(matchingProjects).toHaveLength(1)
      expect(matchingProjects[0].url).toBe(
        `https://github.com/ryanhefner/${name}`,
      )
      expect(matchingProjects[0].description).toBeTruthy()
    },
  )
})
