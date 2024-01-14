import { ArrowLeft } from 'Components/ArrowLeft/ArrowLeft'
import { ArrowRight } from 'Components/ArrowRight/ArrowRight'
import { BoxImage } from 'Components/BoxImage/BoxImage'
import { OverlayBox } from 'Components/OverlayBox/OverlayBox'
import { useRef, useState } from 'react'
import { UploaderEmpty } from '../UploaderEmpty/UploaderEmpty'

export function CarouselUploader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showOverlay, setShowOverlay] = useState(false)

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
  return (
    <div className="flex flex-row items-center justify-center gap-5 ">
      <ArrowLeft fill={false} onClick={scrollPrev} />
      {false ? (
        <UploaderEmpty />
      ) : (
        <>
          <button onClick={toggleOverlay}>Clique aqui</button>
          <div
            ref={containerRef}
            className=" relative flex  w-[824px] flex-row gap-5 overflow-x-auto scroll-smooth rounded-2xl bg-white p-4 shadow-lg "
          >
            <BoxImage isNew={true} onClick={() => {}} />
            <BoxImage url="teste" />
            <OverlayBox show={showOverlay} erro={false} />
            <BoxImage url="teste" />
            <OverlayBox show={showOverlay} erro={false} />
            <BoxImage url="teste" />
            <OverlayBox show={showOverlay} erro={false} />
          </div>
        </>
      )}
      <ArrowRight fill={false} onClick={scrollNext} />
    </div>
  )
}
