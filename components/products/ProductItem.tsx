import { productType } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  productItem: productType;
}

const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <Image
        src={productItem.images[0]}
        alt={productItem.title}
        width={640}
        height={640}
      />
    </div>
  );
};

export default ProductItem;
