import { ArrowLeft } from 'Components/ArrowLeft/ArrowLeft'
import { ArrowRight } from 'Components/ArrowRight/ArrowRight'
import { BoxImage } from 'Components/BoxImage/BoxImage'
import { useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploaderEmpty } from '../UploaderEmpty/UploaderEmpty'
import { OverlayBox } from 'Components/OverlayBox/OverlayBox'
import { BoxNewImage } from 'Components/BoxNewImage/BoxNewImage'

export function CarouselUploader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imagensURL, setImagensURL] = useState([])
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragActive,
    isDragReject
  } = useDropzone({ accept: { 'image/*': [] }, noClick: true })

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth
    }
  }

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth
    }
  }

  useEffect(() => {
    handleUrlImages()
  }, [acceptedFiles])

  function handleDropzone() {
    return !imagensURL.length ? (
      <UploaderEmpty setImages={setImagensURL} imagensURL={imagensURL} />
    ) : (
      <>
        <div
          {...getRootProps({ noClick: true })}
          ref={containerRef}
          className=" relative flex  w-[824px] flex-row gap-5 overflow-x-auto scroll-smooth rounded-2xl bg-white p-4 shadow-lg "
        >
          <BoxNewImage setImages={setImagensURL} imagensURL={imagensURL} />
          {imagensURL.map((url, index) => {
            return <BoxImage key={index} url={url} onClick={() => {}} />
          })}
          <OverlayBox
            DropZoneProps={getRootProps}
            show={isDragActive}
            erro={isDragReject}
          />
        </div>
      </>
    )
  }
  function handleUrlImages() {
    if (acceptedFiles.length > 0) {
      const leitor = new FileReader()

      leitor.onload = function (event) {
        const novasImagensURL = [...imagensURL, event.target.result]
        setImagensURL(novasImagensURL)
      }

      // Lê cada arquivo da lista
      for (let i = 0; i < acceptedFiles.length; i++) {
        leitor.readAsDataURL(acceptedFiles[i])
      }
    }
  }
  return (
    <div className="flex flex-row items-center justify-center gap-5 ">
      <ArrowLeft fill={false} onClick={scrollPrev} />

      <>
        {handleDropzone()}
        <input {...getInputProps()} />
      </>

      <ArrowRight fill={false} onClick={scrollNext} />
    </div>
  )
}
