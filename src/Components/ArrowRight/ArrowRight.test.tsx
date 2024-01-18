import { render } from '@testing-library/react'
import { ArrowRight } from './ArrowRight'

describe('test render', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <ArrowRight fill={true} data-testid="arrow-right" />
    )
    expect(getByTestId('arrow-right')).toBeInTheDocument()
  })
})
