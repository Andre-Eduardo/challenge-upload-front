import { ButtonHTMLAttributes } from 'react'
import { BiLeftArrow, BiSolidLeftArrow } from 'react-icons/bi'

export interface ArrowLeftProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill: boolean
  size?: number
}

export function ArrowLeft({ fill, size = 32, ...buttonProps }: ArrowLeftProps) {
  return (
    <button
      type="button"
      className={`focus:outline-none ${buttonProps.className || ''}`}
      {...buttonProps}
    >
      {fill ? (
        <BiSolidLeftArrow className="text-gray_650" size={size} />
      ) : (
        <BiLeftArrow className="text-gray_650" size={size} />
      )}
    </button>
  )
}
