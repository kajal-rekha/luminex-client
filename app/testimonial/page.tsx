"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className='mt-40'>
      <SectionTitle title='Testimonial' />

      <div className='testimonial-bg'>
        <div className='wrapper sp absolute'>
          <div>
            <h3 className='text-gray text-4xl uppercase font-medium'>
              What clients say
            </h3>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1701586392/14-icon_tardgm.png'
              alt='icon'
              width={150}
              height={30}
              className='inline-block'
            />
          </div>
          <>
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              grabCursor={true}
              speed={500}
              modules={[Pagination, Autoplay]}
              className='mySwiper h-full '
            >
              <SwiperSlide>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus suscipit iste amet consectetur ab saepe. Facilis
                  minus quisquam ipsum aliquam minima repellat cupiditate
                  repellendus laudantium dicta qui, vero doloribus debitis
                  corporis odit, delectus blanditiis quo error aspernatur
                  molestias corrupti. Libero aspernatur, veniam architecto enim
                  non explicabo ratione voluptates corporis deleniti. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                  suscipit iste amet consectetur ab saepe. Facilis minus
                  quisquam ipsum aliquam minima repellat cupiditate repellendus
                  laudantium dicta qui, vero doloribus debitis corporis odit,
                  delectus blanditiis quo error aspernatur molestias corrupti.
                  Libero aspernatur, veniam architecto enim non explicabo
                  ratione voluptates corporis deleniti.
                </p>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
