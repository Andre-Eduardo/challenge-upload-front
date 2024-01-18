import { render } from '@testing-library/react'
import { ButtonUpload } from './ButtonUpload'

describe('test render', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ButtonUpload data-testid="Button-test" />)
    expect(getByTestId('Button-test')).toBeInTheDocument()
  })
})
