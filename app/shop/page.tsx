import Button, { buttonVariants } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const Shop = () => {
  return (
    <section className="wrapper sp ">
      <div className="text-center">
        <SectionTitle title="WELCOME TO OUR JEWELRY SHOP" />
        <div className="mx-auto -mt-7">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701586392/14-icon_tardgm.png"
            alt="icon"
            width={150}
            height={30}
            className="inline-block"
          />
        </div>
      </div>
      <p className="mt-10">
        Discover timeless elegance at our jewelry shop, where exquisite
        craftsmanship meets unparalleled beauty. Adorn yourself with our
        stunning collection.
      </p>
      <p className="text-center">
        meticulously designed pieces that showcase the perfect blend of artistry
        and sophistication
      </p>

      <div className="mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="img w-full">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701588826/lookbook-1_kfnk3o.jpg"
              alt=""
              width={600}
              height={500}
              className="w-full"
            />
          </div>
          <div className=" text-center mx-auto mt-[22%] ">
            <h3 className="text-orange font-medium">
              Eternal Glamour, Artfully Captured
            </h3>
            <p className="text-start w-[32rem]">
              Enter a realm of enduring beauty at our jewelry emporium at where
              every piece narrates a tale of exquisite artistry.
            </p>
            <div className="mt-5">
              <Link
                href="/products"
                className={buttonVariants({ variant: "orange" })}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="content-2 grid grid-cols-1 md:grid-cols-2  gap-10  mt-20">
          <div className=" text-center mx-auto mt-[22%]">
            <h3 className="text-orange font-medium">
              Unparalleled Beauty, Uniquely Crafted
            </h3>
            <p className="text-start w-[32rem]">
              Embark on a journey into the realm of incomparable beauty at our
              exclusive jewelry boutique. Each piece is a masterpiece.
            </p>
            <div className="mt-5">
              <Link
                href="/products"
                className={buttonVariants({ variant: "orange" })}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="img w-full ">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701588986/banner-3_rmntld.jpg"
              alt=""
              width={600}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
