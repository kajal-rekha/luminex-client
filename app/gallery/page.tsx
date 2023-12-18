import { cn } from "@/lib/utils";

import Image from "next/image";
import { gallery } from "@/types/gallery";
import SectionTitle from "@/components/ui/SectionTitle";
import { data } from "@/data/galleryContent";

const Gallery = () => {
  return (
    <section>
      <div className='wrapper sp h-full w-full'>
        <SectionTitle title='Gallery' />

        <div className='gallery-grid-parent h-screen w-full gap-10 mt-20'>
          {data.map((item: gallery) => (
            <div
              key={item.id}
              className={cn(
                item.class,
                "eq group h-full w-full overflow-hidden border-[10px] border-dark/90 shadow-2xl hover:border-dark/80 group"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                height={item.height}
                width={item.width}
                priority
                className='eq h-full w-full object-cover brightness-100 brightness-75 group-hover:brightness-100 grayscale  group-hover:grayscale-0 group-hover:scale-125'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
