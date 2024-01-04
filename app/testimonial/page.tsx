"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { data } from "@/data/testimonialContents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <main className='sp wrapper mt-10 max-h-screen'>
      <SectionTitle title='Testimonial' />

      <div className=''>
        <>
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            grabCursor={true}
            speed={500}
            modules={[Pagination, Autoplay, Navigation]}
            className='mySwiper'
            breakpoints={{
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              350: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {data.map((testimonial, i) => (
              <SwiperSlide
                key={i}
                className='mb-20'
              >
                <div
                  data-aos='fade-down'
                  data-aos-duration='3000'
                  className='flex w-full flex-col gap-5 bg-orange/90 text-dark/90 py-10 px-5 rounded-bl-2xl rounded-tr-2xl text-gray/90'
                >
                  <div className='mx-auto text-center max-w-4xl'>
                   
                    <p className='mt-10 text-lg'>{testimonial.description}</p>
                  </div>
                 
                  <div className='mx-auto mt-5'>
                    <div className='w-20 h-20'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        priority
                        className='rounded-full'
                      />
                    </div>

                    <div className='-ml-7'>
                      <h4 className='font-bold text-xl '>{testimonial.name}</h4>
                      <p className='font-semibold text-lg '>
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </main>
  );
};

export default Testimonial;
