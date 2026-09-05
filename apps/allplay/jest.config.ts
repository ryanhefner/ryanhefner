import nextJest from 'next/jest.js'

export default nextJest()({
  displayName: 'allplay',
  preset: '../../jest.preset.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/allplay',
})
