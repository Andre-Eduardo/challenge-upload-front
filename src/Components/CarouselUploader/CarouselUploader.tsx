import { ArrowLeft } from 'Components/ArrowLeft/ArrowLeft'
import { ArrowRight } from 'Components/ArrowRight/ArrowRight'
import { BoxImage } from 'Components/BoxImage/BoxImage'
import { BoxNewImage } from 'Components/BoxNewImage/BoxNewImage'
import { OverlayBox } from 'Components/OverlayBox/OverlayBox'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IMAGE_WIDTH } from 'utils/constants'
import { UploaderEmpty } from '../UploaderEmpty/UploaderEmpty'
import './CarouselUploader.css'
export function CarouselUploader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imagensURL, setImagensURL] = useState<string[]>([])
  const [ScrollLeft, setScrollLeft] = useState(false)
  const [ScrollRight, setScrollRight] = useState(false)
  const [loadImage, setLoadImage] = useState(true)
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragReject
  } = useDropzone({ accept: { 'image/*': [] }, noClick: true })

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current

      const isAtStart = scrollLeft !== 0
      const isAtEnd = scrollLeft + clientWidth !== scrollWidth
      setScrollLeft(isAtStart)
      setScrollRight(isAtEnd)
    }
  }
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [acceptedFiles])

  const scrollByValue = (value: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + value,
        behavior: 'smooth'
      })
    }
  }
  const scrollNext = () => {
    scrollByValue(IMAGE_WIDTH)
  }

  const scrollPrev = () => {
    scrollByValue(-IMAGE_WIDTH)
  }
  const handleUrlImages = useCallback(() => {
    if (acceptedFiles.length > 0) {
      const novasImagensURL: string[] = [...imagensURL]

      acceptedFiles.forEach((file) => {
        const leitor = new FileReader()

        leitor.onload = function () {
          if (leitor.target?.result) {
            const novaImagemURL = leitor.target.result as string
            novasImagensURL.push(novaImagemURL)

            if (novasImagensURL.length === acceptedFiles.length) {
              setImagensURL(novasImagensURL)
            }
          }
        }

        leitor.onerror = function () {
          console.error('Error reading file:', file)
        }

        leitor.readAsDataURL(file)
      })
    }
  }, [acceptedFiles, imagensURL])
  useEffect(() => {
    handleUrlImages()
  }, [handleUrlImages, acceptedFiles])

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
      <div className="relative ">
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
                upload={false}
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

  function removeImage(urlToRemove: string) {
    const indexToRemove = imagensURL.indexOf(urlToRemove)
    if (indexToRemove !== -1) {
      const novasImagensURL = [...imagensURL]
      novasImagensURL.splice(indexToRemove, 1)
      setImagensURL(novasImagensURL)
    }
  }
  return (
    <div className="mt-7 flex flex-row items-center justify-center gap-5 ">
      <ArrowLeft fill={ScrollLeft} onClick={scrollPrev} />

      <>{handleDropzone()}</>

      <ArrowRight fill={ScrollRight} onClick={scrollNext} />
    </div>
  )
}
