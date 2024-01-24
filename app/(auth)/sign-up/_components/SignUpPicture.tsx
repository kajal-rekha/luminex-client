import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const SignUpPicture = () => {
  return (
    <div className='relative h-full w-full overflow-hidden hidden md:block'>
      <Image
        src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702582336/rings-2-1_vgthi2.jpg'
        alt='sign in picture'
        width={720}
        height={1280}
        priority
        className='h-full w-full object-cover'
      />

      <Overlay />
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full items-end p-20 text-center text-white'>
        <h3>
          &ldquo;Wearing jewelry is like carrying a little piece of art with
          you. It won&apos;t change the world, but it might just brighten your
          corner of it.&rdquo; - Nikki
        </h3>
      </div>
    </div>
  );
};

export default SignUpPicture;
