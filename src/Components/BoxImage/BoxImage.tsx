import { ButtonHTMLAttributes } from 'react'
import { IoMdClose } from 'react-icons/io'

export interface BoxImageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  url: string
  onRemove: () => void
  upload?: boolean
}
export function BoxImage({ url, upload = false, onRemove }: BoxImageProps) {
  return (
    <>
      <div className="group relative max-h-52 min-h-52 min-w-52 max-w-52 rounded-2xl bg-darkGray_400">
        {!upload ? (
          <>
            <img
              src={url}
              alt="Image Uploaded"
              className="h-full w-full rounded-2xl object-cover opacity-100 transition-opacity group-hover:opacity-70"
            />
            <button data-testid="remove-button" onClick={onRemove}>
              <IoMdClose
                size={25}
                className="absolute right-[-11px] top-[-11px] cursor-pointer rounded-full bg-red_100 text-white opacity-0 transition-opacity group-hover:opacity-100"
              />
            </button>
          </>
        ) : (
          <>load</>
        )}
      </div>
    </>
  )
}
