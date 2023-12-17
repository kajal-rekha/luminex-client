"use client";

import Link from "next/link";
import Button, { buttonVariants } from "../ui/Button";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { logout } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const session = useSelector((state: RootState) => state.auth.userAndToken);
   const { cartItems } = useSelector((state: RootState) => state.cart);

   const totalQuantity = cartItems.reduce(
     (acc, item) => acc + item.cartQuantity,
     0
   );

  const dispatch = useDispatch();
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-gray/90 backdrop-blur-xl'>
      {/* NAV LEFT */}
      <nav className='wrapper flex items-center justify-between gap-5'>
        <Link href='/' className='text-2xl font-semibold'>
          luminex
        </Link>

        {/* NAV MID */}

        <ul className='flex items-center gap-5 text-lg'>
          <li>
            <Link href='/' className='link-item'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/shop' className='link-item'>
              Shop
            </Link>
          </li>
          <li>
            <Link href='/products' className='link-item'>
              Products
            </Link>
          </li>

          <li>
            <Link href='/about' className='link-item'>
              About
            </Link>
          </li>
          <li>
            <Link href='/testimonial' className='link-item'>
              Testimonial
            </Link>
          </li>
          <li>
            <Link href='/blog' className='link-item'>
              Blog
            </Link>
          </li>
          <li>
            <Link href='/contact' className='link-item'>
              Contact
            </Link>
          </li>
        </ul>

        {/* NAV RIGHT */}
        <div className='flex gap-5 items-center justify-center'>
          {!session?.user ? (
            <Link
              href='/sign-in'
              className={buttonVariants({ variant: "orange" })}
            >
              Sign in
            </Link>
          ) : (
            <div className='flex items-center gap-5'>
              <div className='w-12 h-12 overflow-hidden rounded-full'>
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={64}
                  height={64}
                  priority
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <Button
                  onClick={() => {
                    dispatch(logout());

                    toast.success("Logout success!");
                  }}
                  variant='orange'
                >
                  Logout
                </Button>
              </div>
            </div>
          )}

          <Link href='/cart'>
            <span className='text-2xl relative '>
              <FiShoppingCart />
              {totalQuantity > 0 && (
                <span className='absolute text-orange text-sm font-semibold bottom-[40%] left-[70%] bg-black rounded-full py-[0.5] px-1'>
                  {totalQuantity}
                </span>
              )}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
