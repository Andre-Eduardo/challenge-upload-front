import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { OverlayBox } from './OverlayBox'

const setImagesMock = jest.fn()
describe('OverlayBox component', () => {
  test('renders without errors', () => {
    const { getByTestId } = render(
      <OverlayBox
        show={true}
        DropZoneProps={jest.fn()}
        getInputProps={jest.fn()}
        setImages={setImagesMock}
        imagensURL={[]}
        acceptedFiles={[]}
      />
    )
    const overlayBoxElement = getByTestId('overlay-input')
    expect(overlayBoxElement).toBeInTheDocument()
  })
})
