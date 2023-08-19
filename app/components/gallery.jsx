import { useState } from 'react'
import './gallery.css'
import Image from 'next/image'
const Gallery = ({ galleryImages }) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal &&
        <div className='lightbox'>
          <i class="bi bi-x-lg btnClose" onClick={handleCloseModal}></i>
          <i class="bi bi-chevron-left btnPrev" onClick={prevSlide}></i>
          <i class="bi bi-chevron-right btnNext" onClick={nextSlide}></i>

          <div className='fullScreenImage'>
            <Image
              src={galleryImages[slideNumber].src}
              alt="Product"
              layout='fill'
              objectFit='contain'
            // className='img-fluid'
            // style={{
            //   objectFit: "contain"
            // }}
            />
            {/* <img src={galleryImages[slideNumber].src} alt='' /> */}
          </div>
        </div>
      }
      <div className='gallery-box'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >

                <Image data-aos="fade-right"
                  src={slide.src}
                  alt="gallery image"
                  width={250}
                  height={250}
                  style={{
                    objectFit: "cover"
                  }}
                />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery