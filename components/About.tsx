import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import SectionTitle from "./ui/SectionTitle";

const About = () => {
  return (
    <section className='wrapper sp'>
      <SectionTitle title='About' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div className='relative'>
          <div className='group overflow-hidden h-[1000] '>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702572913/1-1_bd7kb0.jpg'
              alt=''
              width={500}
              height={800}
              className=' eq w-full h-full group-hover:scale-125'
            />
          </div>
          <div className='group overflow-hidden absolute top-[30%] -right-[10%] hidden md:block'>
            <Image
              src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702572906/shape-1-1-1_dgpsgw.jpg'
              alt=''
              width={400}
              height={400}
              className=' eq w-full h-full group-hover:scale-125'
            />
          </div>
        </div>
        <div className=' mx-auto mt-[10%] text-start md:ml-10'>
          <h3 className='text-orange font-medium mb-3'>
            Radiance Redefined, Luminex Elegance
          </h3>
          <p>
            Luminex Jewelry Shop is a radiant haven where elegance meets
            brilliance. Bathed in a warm glow, the store showcases a curated
            collection of exquisite gems, from scintillating diamonds to
            luminescent pearls. With expert craftsmanship and personalized
            service, Luminex invites you to adorn yourself in timeless splendor,
            illuminating life most cherished moments.
          </p>
          <p className='mt-5'>
            At Luminex Jewelry, sophistication intertwines with innovation. Our
            diverse offerings, from classic designs to contemporary creations,
            mirror the diverse facets of your unique style. Experience the
            allure of luminosity and let our jewels become the luminous
            signature of your exceptional journey.
          </p>

          <div className='mt-5'>
            <Link
              href='/about'
              className={cn(buttonVariants({ variant: "orange" }))}
            >
              More about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
