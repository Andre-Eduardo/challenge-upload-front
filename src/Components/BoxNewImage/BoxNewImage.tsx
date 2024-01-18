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
  setImages: Dispatch<SetStateAction<never[] | string[]>>
  imagensURL: string[]
}
export function BoxNewImage({ setImages, imagensURL }: BoxNewImageProps) {
  const { getRootProps, acceptedFiles } = useDropzone({
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
    <button
      {...getRootProps()}
      className=" flex h-52 min-w-52 max-w-52 cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl bg-gray_200 py-11 hover:bg-gray_600"
    >
      <IoIosAdd size={100} className="w-full text-darkGray_100" />
      <span className="text-xl font-normal text-gray_900">Add new images</span>
    </button>
  )
}
