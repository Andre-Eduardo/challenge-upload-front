import { ButtonHTMLAttributes } from 'react'
import { IoIosAdd, IoMdClose } from 'react-icons/io'

export interface BoxImageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string
  isNew?: boolean
}
export function BoxImage({
  url,
  isNew = false,
  ...buttonProps
}: BoxImageProps) {
  return (
    <>
      {isNew ? (
        <button
          {...buttonProps}
          className=" flex h-52 min-w-52 max-w-52 cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl bg-gray_200 py-11 hover:bg-gray_600"
        >
          <IoIosAdd size={100} className="w-full text-darkGray_100" />
          <span className="text-xl font-normal text-gray_900">
            Add new images
          </span>
        </button>
      ) : (
        <div className="group relative min-h-52 min-w-52 max-w-52 rounded-2xl bg-darkGray_400">
          <img
            src={url}
            alt="Image Uploaded"
            className="h-full w-full rounded-2xl object-cover opacity-100 transition-opacity group-hover:opacity-70"
          />
          <IoMdClose
            size={30}
            className="absolute right-[-11px] top-[-11px] cursor-pointer rounded-full bg-red_100 text-white opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      )}
    </>
  )
}
