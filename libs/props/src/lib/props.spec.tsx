import { render } from '@testing-library/react'

import Props from './props'

describe('Props', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Props />)
    expect(baseElement).toBeTruthy()
  })
})
