import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UploaderEmpty } from './UploaderEmpty'

describe('UploadEmpty', () => {
  const setImages = jest.fn()
  const imagensURL = [] as string[]

  it('should render the button with the correct initial state', () => {
    const { getByTestId } = render(
      <UploaderEmpty setImages={setImages} imagensURL={imagensURL} />
    )

    expect(getByTestId('input-UploaderEmpty')).toBeInTheDocument()
  })

  it('should call setImages with the new images when files are dropped', async () => {
    const { getByTestId } = render(
      <UploaderEmpty setImages={setImages} imagensURL={imagensURL} />
    )

    const uploaderElement = getByTestId('input-UploaderEmpty')

    await userEvent.upload(
      uploaderElement,
      new File(['image content'], 'image.png', { type: 'image/png' })
    )

    await waitFor(() => {
      expect(setImages).toHaveBeenCalledWith([expect.any(String)])
    })
  })
})
