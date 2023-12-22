"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { data } from "@/data/testimonialContents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  return (
    <main className='mb-20'>
      <div className='ml-7'>
        <SectionTitle title='Testimonial' />
      </div>

      <div className='testimonial-bg'>
        <div className='wrapper sp absolute left-[2%]'>
          <h3 className='text-gray text-center text-4xl uppercase font-medium'>
            Voices of Satisfaction
          </h3>

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
              {data.map((testimonial: any, i) => (
                <SwiperSlide key={i} className='relative'>
                  <div className='mb-12'>
                    <div className='w-24 h-24 mx-auto mt-12'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={300}
                        height={300}
                        priority
                        className='object-cover w-full h-full rounded-full'
                      />
                    </div>
                    <div className='contents mx-auto text-center'>
                      <p className='text-gray/80 max-w-5xl ml-[11%] mt-12 '>
                        {testimonial.description}
                      </p>
                      <p className='text-gray mt-7 text-orange'>
                        {testimonial.name}
                      </p>
                      <p className='text-gray'>{testimonial.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </main>
  );
};

export default Testimonial;
