import { productType } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/Button";

interface ProductItemProps {
  productItem: productType;
}

const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Link
        href={`products/${productItem._id}`}
        className="group h-[15rem] w-full overflow-hidden rounded-xl border border-gray"
      >
        <Image
          src={productItem.images[0]}
          alt={productItem.title}
          width={640}
          height={640}
          className=" eq h-full w-full object-cover group-hover:scale-125"
        />
      </Link>
      <div className="eq flex w-full flex-col gap-2.5 rounded-xl border bg-gray/25 p-5 hover:bg-gray/50">
        <span className="text-sm font-bold uppercase tracking-[0.375em] text-orange">
          {productItem.category}
        </span>
        <h4 className="text-2xl">{productItem.title}</h4>
        <p>{productItem.description.substring(0, 50)}...</p>

        <div className="flex items-center justify-between gap-2.5">
          <p>${productItem.price}</p>
          <Link
            href={`/products/${productItem._id}`}
            className={buttonVariants({ variant: "orange" })}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
