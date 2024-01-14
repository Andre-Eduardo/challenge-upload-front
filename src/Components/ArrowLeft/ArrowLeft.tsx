import { ButtonHTMLAttributes } from 'react'
import { BiLeftArrow, BiSolidLeftArrow } from 'react-icons/bi'
interface ArrowLeftProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill: boolean
}
export function ArrowLeft({ fill, ...buttonProps }: ArrowLeftProps) {
  return (
    <button
      className={`focus:outline-none ${buttonProps.className || ''}`}
      {...buttonProps}
    >
      {fill ? (
        <BiSolidLeftArrow className="text-gray_650" size={32} />
      ) : (
        <BiLeftArrow className="text-gray_650" size={32} />
      )}
    </button>
  )
}
