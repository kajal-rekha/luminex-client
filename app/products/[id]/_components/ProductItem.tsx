import { buttonVariants } from "@/components/ui/Button";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store";
import { productType } from "@/types/productType";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

interface productItemProps {
  item: productType;
}

const ProductItem: React.FC<productItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { userAndToken } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleAddToCart = () => {
    if (userAndToken) {
      dispatch(addToCart({ ...item, cartQuantity: 1 }));
      router.push("/cart");
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <section className='product-item'>
      <div className='shop-img relative'>
        <div className='absolute  left-[2%] bottom-[20%] '>
          <p className='text-xl lg:text-3xl text-white  max-w-2xl mb-10'>
            Lost in the enchanting world of Luminex! Each piece is a
            masterpiece, a testament to unparalleled craftsmanship.
          </p>
          <div className='ml-32'>
            <Link
              href='/products'
              className={buttonVariants({ variant: "orange" })}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className='wrapper sp grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10'>
        <div className='w-full h-full group overflow-hidden'>
          <Image
            src={item.images[0]}
            alt={item.title}
            width={600}
            height={300}
            priority
            className=' eq w-full h-full object-cover group-hover:scale-125'
          />
        </div>
        <div className='mt-5'>
          <span className='text-sm font-bold uppercase tracking-[0.375em] text-orange '>
            {item.category}
          </span>
          <h2 className='text-2xl lg:text-4xl tracking-widest mt-3'>
            {item.title}
          </h2>
          <p className='mt-3'>{item.description}</p>
          <p className='mt-3'>
            Jewelry has long been cherished as a symbol of beauty, elegance, and
            personal expression. Each piece of jewelry tells a unique story,
            carrying with it a sense of history and sentiment. Whether it is the
            delicate sparkle of a diamond pendant or the vibrant hues of
            gemstones adorning a bracelet, jewelry has the power to elevate any
            outfit and accentuate individual style.
          </p>
          <div className='flex gap-10 mt-5'>
            <p className='mt-2 font-bold'>
              Price: {formatCurrency(item.price)}
            </p>

            <button
              onClick={handleAddToCart}
              className={buttonVariants({ variant: "orange" })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
