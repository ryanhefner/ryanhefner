import { render } from '@testing-library/react'

import Audio from './audio'

describe('Audio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Audio />)
    expect(baseElement).toBeTruthy()
  })
})
