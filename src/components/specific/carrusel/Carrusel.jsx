import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,Autoplay  } from 'swiper/modules';
import { containerCustom, img, prevButton, nextButton } from './carrusel.module.css';
import './global.css';

const ImageCarousel = ({ images }) => {
  return (
    <div className={containerCustom}>
      <button className={prevButton}><i class="bi bi-chevron-left text-white"/></button>
      <button className={nextButton}><i class="bi bi-chevron-right text-white"/></button>

      <Swiper
        modules={[Pagination, Navigation, Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: `.${prevButton}`, 
          nextEl: `.${nextButton}`, 
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
