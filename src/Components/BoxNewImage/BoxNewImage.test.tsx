import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BoxNewImage } from './BoxNewImage'
describe('BoxNewImage', () => {
  const setImages = jest.fn()
  const imagensURL = [] as string[]

  it('should render the button with the correct initial state', () => {
    const { getByText } = render(
      <BoxNewImage setImages={setImages} imagensURL={imagensURL} />
    )

    expect(getByText('Add new images')).toBeInTheDocument()
  })

  it('should call setImages with the new images when files are dropped', async () => {
    const { getByTestId } = render(
      <BoxNewImage setImages={setImages} imagensURL={imagensURL} />
    )

    const uploaderElement = getByTestId('image-uploader')

    await userEvent.upload(
      uploaderElement,
      new File(['image content'], 'image.png', { type: 'image/png' })
    )

    await waitFor(() => {
      expect(setImages).toHaveBeenCalledWith([expect.any(String)])
    })
  })
})
