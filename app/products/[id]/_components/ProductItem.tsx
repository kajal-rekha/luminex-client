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
    <section className="wrapper sp ">
      <h2 className="text-center mb-20">{item.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-[600] h-[600] group overflow-hidden">
          <Image
            src={item.images[0]}
            alt={item.title}
            width={600}
            height={600}
            className=" eq h-full w-full object-cover group-hover:scale-125"
          />
        </div>
        <div className="max-w-3xl mt-32">
          <span className="text-sm font-bold uppercase tracking-[0.375em] text-orange">
            Type : {item.category}
          </span>
          <p>{item.description}</p>
          <p>Price: {formatCurrency(item.price)}</p>
          <Link href="/" className={buttonVariants({ variant: "orange" })}>
            Add to cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
