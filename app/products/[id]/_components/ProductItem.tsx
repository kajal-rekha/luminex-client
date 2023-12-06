import { productType } from "@/types/productType";
import Image from "next/image";

interface productItemProps {
  item: productType;
}

const ProductItem: React.FC<productItemProps> = ({ item }) => {
  return (
    <section className="wrapper sp ">
      <h2 className="text-center mb-20">{item.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src={item.images[0]}
            alt={item.title}
            width={600}
            height={600}
          />
        </div>
        <div>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
