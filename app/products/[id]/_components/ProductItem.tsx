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
    <section className="">
      <div className="shop-img"></div>
      <div className=" wrapper sp grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="w-[600] h-[300] group overflow-hidden">
          <Image
            src={item.images[0]}
            alt={item.title}
            width={600}
            height={300}
            className=" eq h-full w-full h-full object-cover group-hover:scale-125"
          />
        </div>
        <div className="max-w-3xl mt-5 space-y-5">
          <span className="text-sm font-bold uppercase tracking-[0.375em] text-orange ">
            {item.category}
          </span>
          <h2 className="text-4xl  tracking-widest">{item.title}</h2>
          <p>{item.description}</p>
          <p className="">Price: {formatCurrency(item.price)}</p>
          <Link href="/" className={buttonVariants({ variant: "orange" })}>
            Add to cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
