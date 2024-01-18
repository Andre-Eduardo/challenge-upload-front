import { render, fireEvent } from '@testing-library/react'
import { BoxImage } from './BoxImage'

describe('BoxImage', () => {
  it('renders the image and close button when upload is true', () => {
    const url = 'https://example.com/image.jpg'
    const onRemove = jest.fn()

    const { getByAltText, getByTestId } = render(
      <BoxImage url={url} onRemove={onRemove} />
    )

    const image = getByAltText('Image Uploaded')
    const closeButton = getByTestId('remove-button')

    expect(image).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  })

  it('calls onRemove when close button is clicked', () => {
    const url = 'https://example.com/image.jpg'
    const onRemove = jest.fn()

    const { getByTestId } = render(<BoxImage url={url} onRemove={onRemove} />)

    const closeButton = getByTestId('remove-button')

    fireEvent.click(closeButton)

    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it('renders "load" when upload is false', () => {
    const url = ''
    const onRemove = jest.fn()

    const { getByText } = render(
      <BoxImage url={url} upload={true} onRemove={onRemove} />
    )

    const loadText = getByText('load')

    expect(loadText).toBeInTheDocument()
  })
})
