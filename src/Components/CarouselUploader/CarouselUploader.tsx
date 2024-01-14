import { ArrowLeft } from 'Components/ArrowLeft/ArrowLeft'
import { ArrowRight } from 'Components/ArrowRight/ArrowRight'
import { BoxImage } from 'Components/BoxImage/BoxImage'
import { useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploaderEmpty } from '../UploaderEmpty/UploaderEmpty'

export function CarouselUploader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [imagensURL, setImagensURL] = useState([])
  const {
    acceptedFiles,
    fileRejections,
    isDragActive,

    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'image/jpg': [],
      'image/png': []
    }
  })
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay)
  }

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
    console.log(acceptedFiles)
    handleUrlImages()
  }, [acceptedFiles])

  function handleDropzone() {
    return !acceptedFiles.length ? (
      <UploaderEmpty {...getRootProps()} isDragActive={isDragActive} />
    ) : (
      <>
        <button onClick={toggleOverlay}>Clique aqui</button>
        <div
          ref={containerRef}
          className=" relative flex  w-[824px] flex-row gap-5 overflow-x-auto scroll-smooth rounded-2xl bg-white p-4 shadow-lg "
        >
          <BoxImage isNew={true} onClick={() => {}} />
          {imagensURL.map((url, index) => {
            return <BoxImage key={index} url={url} onClick={() => {}} />
          })}
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
