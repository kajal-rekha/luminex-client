"use client";

import PayButton from "@/components/PayButton";
import {
  clearCart,
  decreaseCart,
  increaseCart,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store";
import { productType } from "@/types/productType";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
const CartItem = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseCart(productId));
  };
  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const calculateSubtotal = (cartItems: productType[]) => {
    return cartItems.reduce((acc, item) => {
      const { price, cartQuantity } = item;
      const itemTotal = calculateTotalPrice(price, cartQuantity);
      acc += itemTotal;
      return acc;
    }, 0);
  };
  const subTotal = calculateSubtotal(cartItems);

  return (
    <section className='cart-section wrapper sp'>
      <h2 className='section-title uppercase text-3xl font-bold space-font text-center mb-10'>
        {cartItems.length > 0
          ? `You've added ${cartItems.length} item${
              cartItems.length > 1 ? "s" : ""
            }`
          : "Your cart is empty"}
      </h2>
      <div className='text-center mb-5'>
        {cartItems.length === 0 && (
          <Link
            href='/products'
            className='text-center text-orange font-medium text-lg block'
          >
            ⬅ Start shopping now
          </Link>
        )}
      </div>
      <div className='cart-wrapper'>
        <div className='product-headline grid grid-cols-5 gap-10 p-3 rounded-lg uppercase font-semibold bg-orange items-center text-gray/90 mb-5'>
          <div className='image'>Image</div>
          <div className='title '>Title</div>
          <div className='unit-price'>Unit Price</div>
          <div className='quentity'>Quentity</div>
          <div className='total-price'>Total Price</div>
        </div>

        <div className='products flex flex-col '>
          {cartItems.map((cartItem) => (
            <div
              key={cartItem._id}
              className='product grid grid-cols-5 gap-10 mt-10 pb-5 border-b border-orange/50'
            >
              <div className='left flex gap-5 col-span-2'>
                <div className='w-20 h-20 lg:w-24 lg:24 overflow-hidden !important'>
                  {" "}
                  <Image
                    src={cartItem.images && cartItem.images[0]}
                    alt={cartItem.title}
                    width={100}
                    height={100}
                    priority
                    className='h-full w-full object-cover rounded-lg'
                  />
                </div>
                <div className='product-details flex flex-col gap-3 items-start'>
                  <span>{cartItem.title}</span>
                  <button
                    onClick={() => handleRemove(cartItem._id)}
                    className='uppercase text-dark/80 hover:text-red eq'
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className='unit-price'>
                <span>{formatCurrency(cartItem.price)}</span>
              </div>
              <div className='counter flex'>
                <button
                  onClick={() => handleDecreaseQuantity(cartItem._id)}
                  className='h-8 md:h-10 w-8 md:w-10 border border-light/90 active:bg-orange/80 bg-orange text-light'
                >
                  -
                </button>
                <span className='h-8 md:h-10 w-8 md:w-10 bg-gray/20 flex justify-center items-center border border-light/90 bg-orange text-light'>
                  {cartItem.cartQuantity}
                </span>

                <button
                  onClick={() => handleIncreaseQuantity(cartItem._id)}
                  className='h-8 md:h-10 w-8 md:w-10 border border-light/90 active:bg-orange/80 bg-orange text-light'
                >
                  +
                </button>
              </div>
              <div className='total-price'>
                <span>
                  {" "}
                  ${calculateTotalPrice(cartItem.price, cartItem.cartQuantity)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='cart-lower flex flex-col-reverse items-center gap-5 md:flex-row md:justify-between md:items-start md:gap-0 py-10 px-5 md:px-0 w-full'>
        <div className='mt-0 md:mt-20'>
          <button
            onClick={handleClearCart}
            className='clear-btn whitespace-nowrap rounded-xl border px-7 py-3 lg:px-10 text-center lg:text-lg bg-orange hover:bg-orange/90 text-light eq uppercase'
          >
            Clear cart
          </button>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <div className='top flex justify-between w-full md:text-2xl text-xl font-medium gap-10'>
            <span className='text-orange'>Subtotal</span>
            <span className='text-orange'>${subTotal}</span>
          </div>
          <p className='mb-2'>
            Taxes and shipping costs will be calculated during checkout.
          </p>
          <PayButton cartItems={cartItems} />
          <Link
            href='/products'
            className='uppercase text-center lg:text-md eq text-dark/90 font-medium mx-auto flex items-center gap-2'
          >
            <span>
              <FaArrowLeftLong />
            </span>
            Continue shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
