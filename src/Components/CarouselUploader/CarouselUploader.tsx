import { ArrowLeft } from 'Components/ArrowLeft/ArrowLeft'
import { ArrowRight } from 'Components/ArrowRight/ArrowRight'
import { BoxImage } from 'Components/BoxImage/BoxImage'
import { BoxNewImage } from 'Components/BoxNewImage/BoxNewImage'
import { OverlayBox } from 'Components/OverlayBox/OverlayBox'
import { useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IMAGE_WIDTH } from 'utils/constants'
import { UploaderEmpty } from '../UploaderEmpty/UploaderEmpty'
import './CarouselUploader.css'
export function CarouselUploader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imagensURL, setImagensURL] = useState<string[]>([])
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragReject
  } = useDropzone({ accept: { 'image/*': [] }, noClick: true })

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + IMAGE_WIDTH,
        behavior: 'smooth'
      })
    }
  }

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - IMAGE_WIDTH,
        behavior: 'smooth'
      })
    }
  }
  useEffect(() => {
    handleUrlImages()
  }, [acceptedFiles])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth
    }
    console.log(imagensURL)
  }, [imagensURL])
  function handleDropzone() {
    return !imagensURL.length ? (
      <UploaderEmpty setImages={setImagensURL} imagensURL={imagensURL} />
    ) : (
      <div className="relative mt-7">
        <div
          {...getRootProps()}
          ref={containerRef}
          className=" flex w-[825px]  flex-row gap-5 overflow-x-auto overflow-y-hidden
          scroll-smooth rounded-2xl bg-white p-4 shadow-lg "
        >
          <BoxNewImage setImages={setImagensURL} imagensURL={imagensURL} />
          {imagensURL.map((url, index) => {
            return (
              <BoxImage
                key={index}
                url={url}
                onRemove={() => removeImage(url)}
              />
            )
          })}
          <OverlayBox
            DropZoneProps={getRootProps}
            getInputProps={getInputProps}
            acceptedFiles={acceptedFiles}
            setImages={setImagensURL}
            imagensURL={imagensURL}
            show={isDragActive}
            erro={isDragReject}
          />
        </div>
      </div>
    )
  }
  function handleUrlImages() {
    if (acceptedFiles.length > 0) {
      const novasImagensURL = [...imagensURL]

      acceptedFiles.forEach((file) => {
        const leitor = new FileReader()

        leitor.onload = function (event: ProgressEvent<FileReader>) {
          if (event.target) {
            const novaImagemURL = event.target.result as string
            novasImagensURL.push(novaImagemURL)

            if (novasImagensURL.length === acceptedFiles.length) {
              setImagensURL(novasImagensURL)
            }
          }
        }

        leitor.readAsDataURL(file)
      })
    }
  }
  function removeImage(urlToRemove: string) {
    const indexToRemove = imagensURL.indexOf(urlToRemove)
    if (indexToRemove !== -1) {
      const novasImagensURL = [...imagensURL]
      novasImagensURL.splice(indexToRemove, 1)
      setImagensURL(novasImagensURL)
    }
  }
  return (
    <div className="flex flex-row items-center justify-center gap-5 ">
      <ArrowLeft fill={false} onClick={scrollPrev} />

      <>{handleDropzone()}</>

      <ArrowRight fill={false} onClick={scrollNext} />
    </div>
  )
}
