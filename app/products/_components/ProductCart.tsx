import { buttonVariants } from "@/components/ui/Button";
import { productType } from "@/types/productType";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  productItem: productType;
}

const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <div className="w-full space-y-5 rounded-xl bg-white p-5 shadow-md shadow-gray">
      <Link
        href={`products/${productItem._id}`}
        className="group inline-block h-[20rem] w-full overflow-hidden rounded-xl shadow-md shadow-gray"
      >
        <Image
          src={productItem.images[0]}
          alt={productItem.title}
          width={640}
          height={640}
          className=" eq h-full w-full object-cover group-hover:scale-125"
        />
      </Link>
      <div className="eq flex w-full flex-col gap-2.5 rounded-xl  bg-gray/25 p-5 hover:bg-gray/50">
        <span className="text-sm font-bold uppercase tracking-[0.375em] text-orange">
          {productItem.category}
        </span>
        <h3 className="'truncate'">{productItem.title.substring(0, 20)}...</h3>
        <p>{productItem.description.substring(0, 50)}...</p>

        <div className="flex items-center justify-between gap-2.5">
          <p>{formatCurrency(productItem.price)}</p>
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
