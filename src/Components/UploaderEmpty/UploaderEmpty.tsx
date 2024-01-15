import { DropzoneRootProps, useDropzone } from 'react-dropzone'
import { ButtonUpload } from '../ButtonUpload/ButtonUpload'
import { Dispatch, SetStateAction, useEffect } from 'react'
export interface UploaderEmptyProps {
  setImages: Dispatch<SetStateAction<never[]>>
  imagensURL: any
}
export function UploaderEmpty({ setImages, imagensURL }: UploaderEmptyProps) {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      accept: { 'image/*': [] }
    })
  function handleUrlImages() {
    if (acceptedFiles.length > 0) {
      const leitor = new FileReader()

      leitor.onload = function (event) {
        const novasImagensURL = [...imagensURL, event.target.result]
        setImages(novasImagensURL)
      }

      // Lê cada arquivo da lista
      for (let i = 0; i < acceptedFiles.length; i++) {
        leitor.readAsDataURL(acceptedFiles[i])
      }
    }
  }
  useEffect(() => {
    handleUrlImages()
  }, [acceptedFiles])
  return (
    <div
      {...getRootProps()}
      className={` flex h-full max-h-[239px] w-full  max-w-[824px] flex-col items-center
      justify-center gap-2 rounded-2xl border-2 border-dashed  ${
        isDragActive ? 'border-green_600' : 'border-gray_600'
      } bg-white p-8 shadow-lg `}
    >
      <ButtonUpload />
      <p className="text-2xl font-normal text-gray_700">or</p>
      <p className=" text-[28px] font-normal text-gray_900">
        Drag and drop a file here
      </p>
    </div>
  )
}
