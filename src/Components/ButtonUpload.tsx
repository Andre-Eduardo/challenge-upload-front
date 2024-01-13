import { FaRegArrowAltCircleUp } from 'react-icons/fa'
import tailwindConfig from '../../tailwind.config.mjs'
export function ButtonUpload() {
  return (
    <button
      className="flex h-20 w-[288] flex-row items-center gap-2 rounded-[65px] border-2 
      border-solid border-gray_100 bg-white p-6 shadow-md"
    >
      <FaRegArrowAltCircleUp
        size={32}
        color={tailwindConfig.theme.colors.blue_600}
      />

      <a className="text-2xl font-semibold text-blue_600">Click to upload</a>
    </button>
  )
}