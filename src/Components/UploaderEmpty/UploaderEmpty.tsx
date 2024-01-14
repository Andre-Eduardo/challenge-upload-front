import { ButtonUpload } from '../ButtonUpload/ButtonUpload'

export function UploaderEmpty() {
  return (
    <div
      className="flex max-h-[239px] max-w-[824px]  flex-col items-center justify-center
      gap-2 rounded-2xl border-2 border-dashed border-gray_600 bg-white p-8 
      shadow-lg "
    >
      <ButtonUpload />
      <p className="text-2xl font-normal text-gray_700">or</p>
      <p className="text-[28px] font-normal text-gray_900">
        Drag and drop a file here
      </p>
    </div>
  )
}
