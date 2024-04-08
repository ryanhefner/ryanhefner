import { render } from '@testing-library/react'

import ReactTransistorFm from './react-transistor-fm'

describe('ReactTransistorFm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTransistorFm />)
    expect(baseElement).toBeTruthy()
  })
})
