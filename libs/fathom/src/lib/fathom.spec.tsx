import { render } from '@testing-library/react'

import Fathom from './fathom'

describe('Fathom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fathom />)
    expect(baseElement).toBeTruthy()
  })
})
