import SectionTitle from "@/components/ui/SectionTitle";
import { productType } from "@/types/productType";
import Image from "next/image";

interface productItemProps {
  item: productType;
}

const ProductItem: React.FC<productItemProps> = ({ item }) => {
  return (
    <section className="wrapper sp">
      <SectionTitle title="Product Items Details"/>
      <div>
        <Image src={item.images[0]} alt={item.title} width={600} height={600} />
        {item.title}
        <p>{item.description}</p>
      </div>
    </section>
  );
};

export default ProductItem;
