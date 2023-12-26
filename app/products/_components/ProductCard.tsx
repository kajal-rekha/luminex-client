import { buttonVariants } from "@/components/ui/Button";
import { productType } from "@/types/productType";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  productItem: productType;
}

const ProductCard: React.FC<ProductCardProps> = ({ productItem }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='3000'
      className='flex w-full flex-col gap-5'
    >
      <Link
        href={`products/${productItem._id}`}
        className='group h-[17rem] w-full overflow-hidden rounded-xl border border-gray'
      >
        <Image
          src={productItem.images[0]}
          alt={productItem.title}
          width={640}
          height={640}
          priority
          className='brigtness-90 group-hover:brigtness-100 eq h-full w-full object-cover group-hover:scale-125'
        />
      </Link>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='eq flex w-full flex-col gap-2.5 rounded-xl border bg-gray/25 p-5 hover:bg-gray/50 mt-5'
      >
        <span className='text-sm font-bold uppercase tracking-[0.375em] text-orange'>
          {productItem.category}
        </span>
        <h3 className="'truncate'">{productItem.title.substring(0, 20)}...</h3>
        <p>{productItem.description.substring(0, 50)}...</p>

        <div className='flex items-center justify-between gap-2.5'>
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

export default ProductCard;
