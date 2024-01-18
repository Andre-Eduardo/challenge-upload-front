import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarouselUploader } from './CarouselUploader'

describe('CarouselUploader', () => {
  it('should render the component correctly when the list of images is empty', () => {
    const { getByTestId } = render(<CarouselUploader />)
    const dropzone = getByTestId('input-UploaderEmpty')
    expect(dropzone).toBeInTheDocument()
  })

  test('updates component when a new image is added via file input', async () => {
    const { getByTestId, getByAltText } = render(<CarouselUploader />)

    const uploaderElement = getByTestId('input-UploaderEmpty')

    await userEvent.upload(
      uploaderElement,
      new File(['image content'], 'image.png', { type: 'image/png' })
    )

    await waitFor(() => {
      const imgElement = getByAltText('Image Uploaded')
      expect(imgElement).toBeInTheDocument()
    })
  })
  test('should show the filled button', async () => {
    const { getByTestId } = render(<CarouselUploader />)

    const uploaderElement = getByTestId('input-UploaderEmpty')

    await userEvent.upload(
      uploaderElement,
      new File(['image content'], 'image.png', { type: 'image/png' })
    )

    await waitFor(async () => {
      const uploaderBox = getByTestId('image-uploader')

      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      waitFor(() => {
        const ButtonNext = getByTestId('rightSolidButton/')
        expect(ButtonNext).toBeInTheDocument()
      })
    })
  })
  it('should set ScrollLeft and ScrollRight state correctly', async () => {
    const { getByTestId } = render(<CarouselUploader />)

    const uploaderElement = getByTestId('input-UploaderEmpty')

    await userEvent.upload(
      uploaderElement,
      new File(['image content'], 'image.png', { type: 'image/png' })
    )

    await waitFor(async () => {
      const uploaderBox = getByTestId('image-uploader')

      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )
      await userEvent.upload(
        uploaderBox,
        new File(['image content'], 'image.png', { type: 'image/png' })
      )

      waitFor(async () => {
        const arrowRightButton = getByTestId('arrow-right')
        const container = getByTestId('dropzoneContainer')
        const initialScrollLeft = container.scrollLeft
        await userEvent.click(arrowRightButton)
        await userEvent.click(arrowRightButton)
        const updatedScrollLeft = container.scrollLeft
        expect(updatedScrollLeft).toBeGreaterThan(initialScrollLeft)
      })
    })
  })
})
