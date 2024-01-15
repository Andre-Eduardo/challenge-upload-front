import {
  ButtonHTMLAttributes,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react'
import { useDropzone } from 'react-dropzone'
import { IoIosAdd } from 'react-icons/io'
export interface BoxNewImageProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  setImages: Dispatch<SetStateAction<string[] | never[]>>
  imagensURL: string[]
}
export function BoxNewImage({ setImages, imagensURL }: BoxNewImageProps) {
  const { getRootProps, acceptedFiles, getInputProps } = useDropzone({
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
    <button
      {...getRootProps()}
      className=" flex h-52 min-w-52 max-w-52 cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl bg-gray_200 py-11 hover:bg-gray_600"
    >
      <IoIosAdd size={100} className="w-full text-darkGray_100" />
      <span className="text-xl font-normal text-gray_900">Add new images</span>
      <input {...getInputProps()} />
    </button>
  )
}
