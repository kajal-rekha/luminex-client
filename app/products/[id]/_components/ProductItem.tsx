import Button, { buttonVariants } from "@/components/ui/Button";
import { productType } from "@/types/productType";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";

interface productItemProps {
  item: productType;
}

const ProductItem: React.FC<productItemProps> = ({ item }) => {
  return (
    <section className="product-item">
      <div className="shop-img relative">
        <div className="">
          <p className=" absolute text-white text-4xl left-[30%] bottom-[40%] max-w-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
            inventore.
          </p>
          <div className="top-[20%] right-[20%] absolute">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701944159/e1e71f09-0065-4beb-9558-62a7f7484365.1582cbf120b574b2a92ac78b185c1b65_syidlr.webp"
              alt=""
              width={100}
              height={100}
            />
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701952953/rng-akt-23-ns-x_deeqex.webp"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="top-[20%] right-[10%] absolute">
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701952925/clive-jewelry_wedding-ring-collection1574602224_1_alc2k3.png"
              alt=""
              width={100}
              height={100}
            />
            <Image
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1701952913/266309_full_xl375c.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="wrapper sp grid grid-cols-1 md:grid-cols-2 gap-20 -mt-10">
        <div className="w-[40rem] h-[38rem] group overflow-hidden">
          <Image
            src={item.images[0]}
            alt={item.title}
            width={600}
            height={300}
            className=" eq h-full w-full h-full object-cover group-hover:scale-125"
          />
        </div>
        <div className="max-w-2xl mt-5 space-y-5 ml-10">
          <span className="text-sm font-bold uppercase tracking-[0.375em] text-orange ">
            {item.category}
          </span>
          <h2 className="text-4xl  tracking-widest">{item.title}</h2>
          <p>{item.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem
            quas fugiat quod quaerat similique ducimus qui deleniti eum odit!
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
          </p>
          <div className="flex gap-10">
            <p className="mt-2">Price: {formatCurrency(item.price)}</p>
            <Link href="/products/cart" className={buttonVariants({ variant: "orange" })}>
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
