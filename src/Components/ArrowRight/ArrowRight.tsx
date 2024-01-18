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
        <BiSolidRightArrow
          data-testid="rightSolidButton"
          className="text-gray_650"
          size={size}
        />
      ) : (
        <BiRightArrow
          data-testid="rightButton"
          className="text-gray_650"
          size={size}
        />
      )}
    </button>
  )
}
