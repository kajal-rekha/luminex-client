import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const SignInPicture = () => {
  return (
    <div className='relative h-full w-full overflow-hidden hidden md:block'>
      <Image
        src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1701508179/slider-2_xsfkrx.jpg'
        alt='sign in picture'
        width={720}
        height={1280}
        priority
        className='h-full w-full object-cover'
      />

      <Overlay />
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full items-end p-20 text-center text-white'>
        <h3>
          <h3>
            &ldquo;Wearing jewellery won&apos;t transform your life. But it may
            just make your day go from ordinary to extraordinary.&rdquo; - Nikki
          </h3>
        </h3>
      </div>
    </div>
  );
};

export default SignInPicture;
