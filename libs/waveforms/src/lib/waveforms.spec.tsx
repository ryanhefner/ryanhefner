import { render } from '@testing-library/react'

import Waveforms from './waveforms'

describe('Waveforms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Waveforms />)
    expect(baseElement).toBeTruthy()
  })
})
