import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";

const Shop = () => {
  return (
    <section className='wrapper sp'>
      <div className='text-center'>
        <SectionTitle title='Welcome to Luminex Shop' />
        <div className='max-w-4xl mx-auto -mt-5'>
          <p className='text-2xl '>
            Discover timeless elegance at our jewelry shop, where exquisite
            craftsmanship meets unparalleled beauty. Adorn yourself with our
            stunning collection, meticulously designed pieces.
          </p>
        </div>
      </div>
      <div className='grid grid-cols md:grid-cols-2 mt-20 gap-5'>
        <div className='group relative overflow-hidden w-full h-[800]'>
          <Image
            src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702900510/New-Project-3-1_hhazx6.jpg'
            alt='shop-image'
            width={650}
            height={500}
            priority
            className='w-full object-cover group-hover:scale-125 h-full transition-transform eq'
          />
          <div className='absolute inset-0 bg-dark bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity eq flex justify-center items-center'>
            <p className='text-gray text-2xl font-bold tracking-widest uppercase'>
              Weading Collection
            </p>
          </div>
        </div>
        <div>
          <div className='group relative overflow-hidden w-full h-[29rem]'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1703247846/article_page_stenzhorn-butterly-lovers_suht8i.jpg'
              alt='shop-image'
              width={650}
              height={500}
              priority
              className='w-full object-cover group-hover:scale-125 h-full transition-transform eq'
            />
            <div className='absolute inset-0 bg-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity eq flex justify-center items-center'>
              <p className='text-gray text-2xl font-bold tracking-widest uppercase'>
                Winter Collection
              </p>
            </div>
          </div>

          <div className='group relative overflow-hidden w-full h-[29rem] mt-5'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1701508196/slider-3_f8jnpd.jpg'
              alt='shop-image'
              width={650}
              height={500}
              priority
              className='w-full object-cover group-hover:scale-125 h-full transition-transform eq'
            />
            <div className='absolute inset-0 bg-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity eq flex justify-center items-center'>
              <p className='text-gray text-2xl font-bold tracking-widest uppercase'>
                Summer Collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
