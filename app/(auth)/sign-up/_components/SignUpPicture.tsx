import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const SignUpPicture = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1702441596/newsletter-image_abegwu.jpg"
        alt="sign in picture"
        width={720}
        height={1280}
        priority
        className="h-full w-full object-cover"
      />

      <Overlay />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full items-end p-20 text-center text-white">
        <h3>
          "Wearing jewellery won't transform your life. But it may just make
          your day go from ordinary to extraordinary." _ Nikki
        </h3>
      </div>
    </div>
  );
};

export default SignUpPicture;
