"use client";

import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/formatCurrenct";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "Elegant Diamond Pendant",
    price: "$1,500",
    description:
      "A stunning diamond pendant crafted with 18k white gold, perfect for any special occasion.",
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1701944159/e1e71f09-0065-4beb-9558-62a7f7484365.1582cbf120b574b2a92ac78b185c1b65_syidlr.webp",
    headline: "Timeless Beauty: Diamond Pendant",
  },
  {
    name: "Royal Blue Sapphire Earrings",
    price: "$2,200",
    description:
      "Exquisite sapphire earrings featuring deep blue gemstones set in a delicate 14k gold design.",
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1701762204/7_cchwem.jpg",
    headline: "Regal Elegance: Sapphire Earrings",
  },
  {
    name: "Chic Rose Gold Bracelet",
    price: "$800",
    description:
      "A modern and stylish rose gold bracelet with a minimalist design, perfect for everyday wear.",
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1701762172/Morkopela-Vintage-Enamel-Siders-Hair-Claw-Clip-Flower-Small-Hair-Clip-Accessories-Fashion-Rhinestone-Hair-Jewelry_w5jxqq.webp",
    headline: "Contemporary Charm: Rose Gold Bracelet",
  },
];
const CartItem = () => {
  return (
    <section className="cart-section wrapper sp">
      <h2 className="text-center mb-10">Your Cart </h2>
      <div className="cart-wrapper">
        <div className="product-headline grid grid-cols-5 gap-10 pb-5 border-b border-gray/80 uppercase font-medium">
          <div className="product col-span-2">Product</div>
          <div className="unit-price">Unit Price</div>
          <div className="quentity">Quentity</div>
          <div className="total-price">Total Price</div>
        </div>

        <div className="products flex flex-col">
          {data.map((product) => (
            <div key={product.name} className="product grid grid-cols-5 gap-10 mt-10 border-b border-gray/80 pb-5">
              <div className="left flex gap-5 col-span-2">
                <div className="w-20 h-20 overflow-hidden ">
                  {" "}
                  <Image
                    src={product.image}
                    alt={product.headline}
                    width={100}
                    height={100}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="product-details flex flex-col gap-3 items-start">
                  <span>{product.headline}</span>
                  <button className="uppercase text-dark/80 hover:text-red eq">
                    Remove
                  </button>
                </div>
              </div>
              <div className="unit-price">
                <p>{product.price}</p>
              </div>
              <div className="counter flex">
                <button className="h-8 md:h-10 w-8 md:w-10 bg-gray/20 border border-dark/90 active:bg-orange/90">
                  -
                </button>
                <span className="h-8 md:h-10 w-8 md:w-10 bg-gray/20 flex justify-center items-center border border-dark/90 ">
                  5
                </span>

                <button className="h-8 md:h-10 w-8 md:w-10 bg-gray/20 border border-dark/90 active:bg-orange/90">
                  +
                </button>
              </div>
              <div className="total-price">$3000</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-lower flex flex-col-reverse items-center gap-5 md:flex-row md:justify-between md:items-start md:gap-0 py-10 px-5 md:px-0 w-full">
        <div className="mt-0 md:mt-14">
          <button className="clear-btn uppercase border border-dark/90 py-3 px-8 hover:bg-orange hover:text-gray/90 text-sm md:text-md hover:border-orange eq">
            Clear cart
          </button>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full md:text-2xl text-xl font-medium gap-10">
            <span className="text-orange">Subtotal</span>
            <span className="text-orange">$20000</span>
          </div>
          <Link
            href="/cart/order"
            className={cn(buttonVariants({ variant: "orange", size: "full" }))}
          >
            Chechout
          </Link>
          <Link
            href="/products"
            className="continue uppercase text-dark/90 font-medium "
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
