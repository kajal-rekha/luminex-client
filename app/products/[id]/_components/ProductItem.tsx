import { productType } from "@/types/productType";
import Image from "next/image";

interface productItemProps {
  item: productType;
}

const ProductItem: React.FC<productItemProps> = ({ item }) => {
  return (
    <section className="wrapper sp grid grid-cols-1 md:grid-cols-2">
      <h2 className="text-center mb-20">{item.title}</h2>
      <div>
        <Image src={item.images[0]} alt={item.title} width={600} height={600} />
      </div>
      <div>
        <p>{item.description}</p>
      </div>
    </section>
  );
};

export default ProductItem;
