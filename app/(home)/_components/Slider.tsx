"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { data } from "@/data/sliderContents";
import Image from "next/image";
import Overlay from "@/components/ui/Overlay";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const Slider = () => {
  return (
    <section className="mt-20 h-[calc(100vh-5rem)] w-full">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        speed={500}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper h-full w-full"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.heading} className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1125}
              height={750}
              className="h-full w-full object-cover"
            />
            <Overlay />
            <div className="sp wrapper absolute bottom-0 left-0 right-0 top-0 h-full w-full space-y-5  z-[5] text-gray/95 mt-10">
              <h1 className="max-w-6xl">{slide.heading}</h1>
              <p className="mt-5 max-w-3xl">{slide.subHeading}</p>
              <div className="btn mt-5">
                <Link
                  href="/products"
                  className={cn(buttonVariants({ variant: "orange" }))}
                >
                  Browse Jewllery Products
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
