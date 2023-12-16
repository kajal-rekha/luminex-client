"use client";

import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  clearCart,
  decreaseCart,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store";
import { productType } from "@/types/productType";
//import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
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
      <h2 className='text-center mb-10'>Your Cart </h2>
      <div className='cart-wrapper'>
        <div className='product-headline grid grid-cols-5 gap-10 pb-5 border-b border-gray/80 uppercase font-medium'>
          <div className='product col-span-2'>Product</div>
          <div className='unit-price'>Unit Price</div>
          <div className='quentity'>Quentity</div>
          <div className='total-price'>Total Price</div>
        </div>

        <div className='products flex flex-col'>
          {cartItems.map((cartItem) => (
            <div
              key={cartItem._id}
              className='product grid grid-cols-5 gap-10 mt-10 border-b border-gray/80 pb-5'
            >
              <div className='left flex gap-5 col-span-2'>
                <div className='w-20 h-20 overflow-hidden '>
                  {" "}
                  <Image
                    src={cartItem.images[0]}
                    alt={cartItem.title}
                    width={100}
                    height={100}
                    priority
                    className='h-full w-full object-cover'
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
                <p>{cartItem.price}</p>
              </div>
              <div className='counter flex'>
                <button
                  onClick={() => handleDecreaseQuantity(cartItem._id)}
                  className='h-8 md:h-10 w-8 md:w-10 bg-gray/20 border border-dark/90 active:bg-orange/90'
                >
                  -
                </button>
                <span className='h-8 md:h-10 w-8 md:w-10 bg-gray/20 flex justify-center items-center border border-dark/90 '>
                  {cartItem.cartQuantity}
                </span>

                <button
                  onClick={() => handleRemove(cartItem._id)}
                  className='h-8 md:h-10 w-8 md:w-10 bg-gray/20 border border-dark/90 active:bg-orange/90'
                >
                  +
                </button>
              </div>
              <div className='total-price'>
                ${calculateTotalPrice(cartItem.price, cartItem.cartQuantity)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='cart-lower flex flex-col-reverse items-center gap-5 md:flex-row md:justify-between md:items-start md:gap-0 py-10 px-5 md:px-0 w-full'>
        <div className='mt-0 md:mt-14'>
          <button
            onClick={handleClearCart}
            className='clear-btn uppercase border border-dark/90 py-3 px-8 hover:bg-orange hover:text-gray/90 text-sm md:text-md hover:border-orange eq'
          >
            Clear cart
          </button>
        </div>
        <div className='flex flex-col items-start gap-2'>
          <div className='top flex justify-between w-full md:text-2xl text-xl font-medium gap-10'>
            <span className='text-orange'>Subtotal</span>
            <span className='text-orange'>${subTotal}</span>
          </div>
          <Link
            href='/cart/order'
            className={cn(buttonVariants({ variant: "orange", size: "full" }))}
          >
            Chechout
          </Link>
          <Link
            href='/products'
            className='continue uppercase text-dark/90 font-medium '
          >
            {" "}
            ⬅ Continue shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
