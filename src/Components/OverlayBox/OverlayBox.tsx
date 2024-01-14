import { IoMdClose } from 'react-icons/io'
import { MdOutlineFileUpload } from 'react-icons/md'

export interface OverlayBoxProps {
  show: boolean
  erro?: boolean
}
export function OverlayBox({ show, erro = false }: OverlayBoxProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center bg-darkGray_200 ${
        show ? 'visible bg-opacity-80' : 'invisible'
      }`}
    >
      {!erro ? (
        <>
          <MdOutlineFileUpload size={90} className="text-white" />
          <p className="text-[28px] font-normal text-white">
            Drag here to upload
          </p>
          <p className="text-xl font-normal text-white">
            PNG or JPG (max. 800x400px)
          </p>
        </>
      ) : (
        <>
          <IoMdClose
            size={70}
            className="  rounded-full bg-red_100 text-white "
          />
          <p className="text-[28px] font-normal text-white">Failed to upload</p>
          <p className="max-w-[345px] text-center text-xl font-normal text-white">
            Please check if the image has the right size and extension and try
            again
          </p>
        </>
      )}
    </div>
  )
}
