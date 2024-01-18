import { render } from '@testing-library/react'
import { ArrowLeft } from './ArrowLeft'

describe('test render', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <ArrowLeft fill={true} data-testid="arrow-left" />
    )
    expect(getByTestId('arrow-left')).toBeInTheDocument()
  })
})
