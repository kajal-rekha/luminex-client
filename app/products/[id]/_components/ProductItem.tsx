import { buttonVariants } from "@/components/ui/Button";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { productType } from "@/types/productType";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface productItemProps {
  item: productType;
}

const ProductItem: React.FC<productItemProps> = ({ item }) => {
  const handleAddToCart = () => {
    const dispatch = useDispatch();
    dispatch(addToCart({ item, cartQuantity: 1 }));
  };
  return (
    <section className='product-item'>
      <div className='shop-img relative'>
        <div className='absolute  left-[2%] bottom-[20%] '>
          <p className='text-3xl text-white  max-w-2xl mb-10'>
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

      <div className='wrapper sp grid grid-cols-1 md:grid-cols-2 gap-20 mt-10'>
        <div className='w-[40rem] h-[38rem] group overflow-hidden'>
          <Image
            src={item.images[0]}
            alt={item.title}
            width={600}
            height={300}
            className=' eq w-full h-full object-cover group-hover:scale-125'
          />
        </div>
        <div className='max-w-2xl mt-5 space-y-5 ml-10'>
          <span className='text-sm font-bold uppercase tracking-[0.375em] text-orange '>
            {item.category}
          </span>
          <h2 className='text-4xl  tracking-widest'>{item.title}</h2>
          <p>{item.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem
            quas fugiat quod quaerat similique ducimus qui deleniti eum odit!
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
            Optio iure earum, ut excepturi facere eum recusandae voluptates est.
          </p>
          <div className='flex gap-10'>
            <p className='mt-2'>Price: {formatCurrency(item.price)}</p>

            <button
              onClick={()=>handleAddToCart()}
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
