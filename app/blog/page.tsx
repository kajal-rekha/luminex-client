import { buttonVariants } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <main className='wrapper sp -mt-28 lg:-mt-0'>
      <SectionTitle title='blog' />
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
          <div
            data-aos='fade-right'
            data-aos-duration='3000'
            className='group overflow-hidden h-[20rem]'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702983977/B6_roqldn.webp'
              alt='blog-image'
              width={650}
              height={500}
              priority
              className='eq w-full group-hover:scale-125'
            />
          </div>

          <div data-aos='fade-left' data-aos-duration='3000'>
            <h3 className='text-orange text-xl lg:text-4xl font-medium lg:text-center'>
              Enchanting Vintage Charm,Timeless Elegance Reimagined
            </h3>
            <p className='mt-4'>
              Indulge in the allure of our vintage-inspired jewelry collection.
              Each piece tells a story of timeless elegance and romantic
              craftsmanship. Discover intricate details and exquisite designs
              that transport you to a bygone era. From delicate pearls to ornate
              filigree, our vintage collection captures the essence of classic
              beauty.Elevate your style with a touch of nostalgia.
            </p>
            <div className='mt-6 text-center'>
              <Link
                href='/blogs'
                className={cn(buttonVariants({ variant: "orange" }))}
              >
                Read more ➡
              </Link>
            </div>
          </div>
        </div>

        <div className='content-2 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-10 lg:mt-20'>
          <div data-aos='fade-right' data-aos-duration='3000'>
            <h3 className='text-orange text-2xl lg:text-4xl font-medium lg:text-center'>
              Bands Commitment Eternal Love - Wedding Different
            </h3>
            <p className='mt-4'>
              Celebrate everlasting love with our exquisite collection of
              wedding bands. Each ring is a symbol of commitment, crafted with
              precision and adorned with timeless elegance. From classic gold
              bands to contemporary designs, our wedding collection caters to
              every couple unique style. Whether you prefer a traditional,
              diamond-studded band or a modern, engraved ring.
            </p>
            <div className='mt-6 text-center'>
              <Link
                href='/blogs'
                className={buttonVariants({ variant: "orange" })}
              >
                Read more ➡
              </Link>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='3000'
            className='group overflow-hidden h-[20rem]'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1703242611/blog_001_ew5vjz.webp'
              alt='shop-image'
              width={650}
              height={500}
              priority
              className='eq w-full group-hover:scale-125'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10  mt-5 lg:mt-20'>
          <div
            data-aos='fade-right'
            data-aos-duration='3000'
            className='group overflow-hidden h-[20rem]'
          >
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1703225912/beautiful-girl-set-jewelry-woman-600nw-1482513518_phykfq.webp'
              alt='blog-image'
              width={650}
              height={500}
              priority
              className=' eq w-full group-hover:scale-125'
            />
          </div>

          <div data-aos='fade-left' data-aos-duration='3000'>
            <h3 className='text-orange text-xl lg:text-4xl font-medium lg:text-center '>
              Modern Minimalist Elegance, Sleek Contemporary Sophistication
            </h3>
            <p className='mt-4 text-justify'>
              Embrace the simplicity of modern elegance with our minimalist
              jewelry collection. Clean lines, sleek designs, and understated
              beauty define this curated selection. Perfect for those who
              appreciate the essence of less-is-more, our modern pieces
              effortlessly complement any style. Whether it is a sleek pendant
              or a minimalist ring, each item reflects a contemporary.
            </p>
            <div className='mt-6 text-center'>
              <Link
                href='/blogs'
                className={buttonVariants({ variant: "orange" })}
              >
                Read more ➡
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-20 text-center'>
          <Link href='/blogs' className={buttonVariants({ variant: "orange" })}>
            View all blogs
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Blog;
