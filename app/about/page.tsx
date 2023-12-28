"use client";

import Overlay from "@/components/ui/Overlay";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className='about-page'>
      <div className='about-bg'></div>
      <Overlay />
      <h2
        data-aos='fade-down'
        data-aos-duration='2000'
        className='absolute top-[35%] left-[18%] lg:left-[35%] xl:left-[32%] 2xl:left-[34%] text-gray font-bold text-4xl xl:text-7xl 2xl:text-8xl'
      >
        About Luminex
      </h2>
      <p
        data-aos='fade-up'
        data-aos-duration='2000'
        className='absolute top-[45%] xl:top-[53%] left-[5%] lg:left-[8%] xl:left-[17%] 2xl:top-[60%] 2xl:left-[29%] text-gray font-medium text-2xl lg:text-3xl max-w-4xl text-center'
      >
        Luminex Jewelry dazzles with timeless elegance, offering radiant gems,
        expert craftsmanship, and personalized adornments—transforming moments
        into cherished memories with enduring beauty and style.
      </p>

      <div className='wrapper sp'>
        <h3
          data-aos='fade-down'
          data-aos-duration='2000'
          className='text-2xl lg:text-4xl xl:text-5xl max-w-xl text-center mx-auto text-orange'
        >
          Timeless Elegance and Radiant Gems
        </h3>
        <h5
          data-aos='fade-up'
          data-aos-duration='2000'
          className='text-xl lg:text-3xl max-w-4xl text-center mx-auto mt-5'
        >
          Discover the Artistry of Craftsmanship and Personalized Adornments,
          Elevating Every Moment into a Cherished Expression of Individual
          Style.
        </h5>
        <p
          data-aos='fade-up'
          data-aos-duration='2000'
          className='text-lg lg:text-2xl mt-5'
        >
          Step into the enchanting world of Luminex Jewelry, where brilliance
          meets sophistication. Our collection transcends ordinary adornments,
          offering a symphony of radiant gems meticulously crafted to tell your
          unique story. Experience the fusion of timeless beauty and
          personalized elegance, making every moment a luminous celebration of
          your distinctive style.
        </p>

        <div className='images grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20'>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='w-full h-[18rem] lg:h-[25rem] group rounded-xl overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702582336/rings-2-1_vgthi2.jpg'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='w-full h-full object-cover group-hover:scale-125 eq'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='w-full h-[18rem] lg:h-[25rem] group rounded-xl overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702582330/bracelets_kk7n3b.jpg'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='w-full h-full object-cover group-hover:scale-125 eq'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='w-full h-[18rem] lg:h-[25rem] group rounded-xl overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702582321/product_grid_tpwigt.webp'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='w-full h-full object-cover group-hover:scale-125 eq'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='w-full h-[18rem] lg:h-[25rem] group rounded-xl overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702582313/insta-4_nd7pym.webp'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='w-full h-full object-cover group-hover:scale-125 eq'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='w-full h-[18rem] lg:h-[25rem] group rounded-xl overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702584678/Rectangle-4899-1-q1ktbntzlvvi6o6528ln6d1jc6yl7o8wvedzjlzogo_emnnrr.jpg'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='w-full h-full object-cover group-hover:scale-125 eq'
            />
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className=' w-full h-[18rem] lg:h-[25rem] group overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702584672/img3-middle_gmpynf.webp'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='eq w-full h-full group-hover:scale-125'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className=' w-full h-[18rem] lg:h-[25rem] group overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702584651/insta-4_lqepvw.jpg'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='eq w-full  h-full group-hover:scale-125'
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className=' w-full h-[18rem] lg:h-[25rem] group overflow-hidden'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702584656/chain-lg_dzayib.jpg'
              alt='about-image'
              width={300}
              height={500}
              priority
              className='eq w-full h-full group-hover:scale-125'
            />
          </div>
        </div>

        <div>
          <p
            data-aos='fade-up'
            data-aos-duration='2000'
            className='text-xl lg:text-2xl mt-20'
          >
            Embark on a transformative journey with Luminex Jewelry, where every
            piece is a testament to sophistication and refined artistry. Our
            curated collection, adorned with radiant gems, transcends mere
            accessories, becoming an integral part of your narrative. Each
            creation is meticulously crafted, offering personalized elegance
            that resonates with your individuality. At Luminex, we celebrate the
            extraordinary in every moment, turning life milestones into luminous
            memories. Illuminate your style with the essence of timeless beauty,
            and let Luminex be the radiant companion in your quest for enduring
            elegance and exceptional self-expression.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
