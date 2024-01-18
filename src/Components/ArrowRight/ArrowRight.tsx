import { ButtonHTMLAttributes } from 'react'
import { BiRightArrow, BiSolidRightArrow } from 'react-icons/bi'

export interface ArrowRightProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill: boolean
  size?: number
}
export function ArrowRight({
  fill,
  size = 32,
  ...buttonProps
}: ArrowRightProps) {
  return (
    <button
      className={`focus:outline-none ${buttonProps.className || ''}`}
      {...buttonProps}
    >
      {fill ? (
        <BiSolidRightArrow className="text-gray_650" size={size} />
      ) : (
        <BiRightArrow className="text-gray_650" size={size} />
      )}
    </button>
  )
}
