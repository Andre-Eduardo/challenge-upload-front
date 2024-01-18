import { Dispatch, SetStateAction, useEffect } from 'react'
import { DropzoneRootProps } from 'react-dropzone'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineFileUpload } from 'react-icons/md'

export interface OverlayBoxProps {
  show: boolean
  erro?: boolean
  DropZoneProps: <T extends DropzoneRootProps>(props?: T) => T
  getInputProps: any
  acceptedFiles: any
  setImages: Dispatch<SetStateAction<string[] | never[]>>
  imagensURL: string[]
}
export function OverlayBox({
  show,
  erro = false,
  DropZoneProps,
  getInputProps,
  setImages,
  imagensURL,
  acceptedFiles
}: OverlayBoxProps) {
  function handleUrlImages() {
    if (acceptedFiles.length > 0) {
      const novasImagensURL = [...imagensURL]

      acceptedFiles.forEach((file: Blob) => {
        const leitor = new FileReader()

        leitor.onload = function (event: ProgressEvent<FileReader>) {
          if (event.target) {
            const novaImagemURL = event.target.result as string
            novasImagensURL.push(novaImagemURL)

            setImages(novasImagensURL)
          }
        }

        leitor.readAsDataURL(file)
      })
    }
  }
  useEffect(() => {
    handleUrlImages()
  }, [acceptedFiles])

  return (
    <div
      {...DropZoneProps()}
      className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-darkGray_200 opacity-80 ${
        show ? 'visible ' : 'invisible'
      }`}
    >
      {!erro ? (
        <>
          <MdOutlineFileUpload size={90} className="text-white" />
          <p className="text-[28px] font-normal text-white">
            Drag here to upload
          </p>
          <p className="text-xl font-normal text-white">
            PNG or JPG (max. 800x400px)
          </p>
        </>
      ) : (
        <>
          <IoMdClose
            size={70}
            className="  rounded-full bg-red_100 text-white "
          />
          <p className="text-[28px] font-normal text-white">Failed to upload</p>
          <p className="max-w-[345px] text-center text-xl font-normal text-white">
            Please check if the image has the right size and extension and try
            again
          </p>
        </>
      )}
      <input data-testid="overlay-input" {...getInputProps()} />
    </div>
  )
}
