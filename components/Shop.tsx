import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  return (
    <section className='wrapper sp -mb-32 lg:-mb-20'>
      <div className='text-center'>
        <h2
          data-aos='fade-down'
          data-aos-duration='1000'
          className='mb-8 text-2xl lg:text-5xl'
        >
          Welcome to Luminex Shop
        </h2>

        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='lg:max-w-4xl mx-auto -mt-5'
        >
          <p className='text-lg lg:text-2xl'>
            Discover timeless elegance at our jewelry shop, where exquisite
            craftsmanship meets unparalleled beauty. Adorn yourself with our
            stunning collection, meticulously designed pieces.
          </p>
        </div>
      </div>
      <div className='grid grid-cols md:grid-cols-2 mt-10 lg:mt-20 gap-6'>
        <div
          data-aos='zoom-in'
          data-aos-duration='3000'
          className='group relative overflow-hidden lg:h-[59.5rem]'
        >
          <Image
            src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702900510/New-Project-3-1_hhazx6.jpg'
            alt='shop-image'
            width={650}
            height={500}
            priority
            className='w-full object-cover group-hover:scale-125 h-full transition-transform eq'
          />
          <div className='absolute inset-0 bg-dark bg-opacity-60 opacity-0 flex flex-col group-hover:opacity-100 transition-opacity eq  justify-center items-center'>
            <p className='text-gray lg:text-2xl font-bold tracking-widest uppercase'>
              Weading Collection
            </p>
            <div className='mt-8'>
              <Link
                href='/products'
                className='text-gray font-bold tracking-widest uppercase border border-gray py-3 px-5 rounded-lg'
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div
            data-aos='zoom-in'
            data-aos-duration='3000'
            className='group relative overflow-hidden lg:h-[29rem]'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1703247846/article_page_stenzhorn-butterly-lovers_suht8i.jpg'
              alt='shop-image'
              width={650}
              height={500}
              priority
              className='w-full object-cover group-hover:scale-125 h-full transition-transform eq'
            />
            <div className='absolute inset-0 bg-dark bg-opacity-50 opacity-0 flex flex-col group-hover:opacity-100 transition-opacity eq  justify-center items-center'>
              <p className='text-gray lg:text-2xl font-bold tracking-widest uppercase'>
                Winter Collection
              </p>
              <div className='mt-8'>
                <Link
                  href='/products'
                  className='text-gray font-bold tracking-widest uppercase border border-gray py-3 px-5 rounded-lg'
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>

          <div
            data-aos='zoom-in'
            data-aos-duration='3000'
            className='group relative overflow-hidden lg:h-[29rem]'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1701508196/slider-3_f8jnpd.jpg'
              alt='shop-image'
              width={650}
              height={500}
              priority
              className='w-full object-cover group-hover:scale-125 h-full transition-transform eq'
            />
            <div className='absolute inset-0 bg-dark bg-opacity-50 opacity-0 flex flex-col group-hover:opacity-100 transition-opacity eq  justify-center items-center'>
              <p className='text-gray lg:text-2xl font-bold tracking-widest uppercase'>
                Summer Collection
              </p>
              <div className='mt-8'>
                <Link
                  href='/products'
                  className='text-gray font-bold tracking-widest uppercase border border-gray py-3 px-5 rounded-lg'
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
