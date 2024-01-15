import { Dispatch, SetStateAction, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { ButtonUpload } from '../ButtonUpload/ButtonUpload'
export interface UploaderEmptyProps {
  setImages: Dispatch<SetStateAction<string[] | never[]>>
  imagensURL: string[]
}
export function UploaderEmpty({ setImages, imagensURL }: UploaderEmptyProps) {
  const { getRootProps, acceptedFiles, isDragActive } = useDropzone({
    accept: { 'image/*': [] }
  })
  function handleUrlImages() {
    if (acceptedFiles.length > 0) {
      const novasImagensURL = [...imagensURL] // Criar uma cópia do estado atual

      acceptedFiles.forEach((file) => {
        const leitor = new FileReader()

        leitor.onload = function (event: ProgressEvent<FileReader>) {
          if (event.target) {
            const novaImagemURL = event.target.result as string
            novasImagensURL.push(novaImagemURL) // Adicionar a nova imagem à cópia

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
