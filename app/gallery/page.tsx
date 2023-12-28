import { cn } from "@/lib/utils";
import Image from "next/image";
import { gallery } from "@/types/gallery";
import SectionTitle from "@/components/ui/SectionTitle";
import { data } from "@/data/galleryContent";

const Gallery = () => {
  return (
    <section className="-mb-14 lg:-mb-0">
      <div className='wrapper sp h-full w-full'>
        <SectionTitle title='Gallery' />

        <div className='gallery-grid-parent  h-screen w-full gap-10 mt-20'>
          {data.map((item: gallery) => (
            <div
              data-aos='zoom-in-up'
              data-aos-duration='2000'
              key={item.id}
              className={cn(
                item.class,
                "eq group h-full w-full overflow-hidden rounded-xl shadow-2xl hover:border-dark/80 group"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                height={500}
                width={500}
                priority
                className='eq h-full w-full object-cover brightness-75 group-hover:brightness-100  group-hover:scale-125'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
