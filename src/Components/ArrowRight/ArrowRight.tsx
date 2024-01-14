import { ButtonHTMLAttributes } from 'react'
import { BiRightArrow, BiSolidRightArrow } from 'react-icons/bi'

interface ArrowRightProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill: boolean
}
export function ArrowRight({ fill, ...buttonProps }: ArrowRightProps) {
  return (
    <button
      className={`focus:outline-none ${buttonProps.className || ''}`}
      {...buttonProps}
    >
      {fill ? (
        <BiSolidRightArrow className="text-gray_650" size={32} />
      ) : (
        <BiRightArrow className="text-gray_650" size={32} />
      )}
    </button>
  )
}
