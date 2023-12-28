"use client";

import Link from "next/link";
import Button, { buttonVariants } from "../ui/Button";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { logout } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleOpen = () => {
    setToggle(false);
  };

  const session = useSelector((state: RootState) => state.auth.userAndToken);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + item.cartQuantity,
    0
  );

  const dispatch = useDispatch();
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20  items-center border-b border-gray bg-gray/90 backdrop-blur-xl'>
      {/* NAV LEFT */}
      <nav className='wrapper flex w-full h-full items-center justify-between gap-5'>
        <div data-aos='fade-right' data-aos-duration='1000'>
          <Link href='/' className='text-2xl font-semibold'>
            luminex
          </Link>
        </div>

        {/* NAV MID */}

        <ul
          data-aos='fade-down'
          data-aos-duration='1000'
          className='md:flex hidden items-center gap-5 text-lg md:block'
        >
          <li>
            <Link href='/' className='link-item'>
              Home
            </Link>
          </li>

          <li>
            <Link href='/products' className='link-item'>
              Products
            </Link>
          </li>
          <li>
            <Link href='/gallery' className='link-item'>
              gallery
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
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='flex gap-5 items-center justify-center'
        >
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
              <BsBag />
              {totalQuantity > 0 && (
                <span className='absolute text-orange text-sm font-semibold bottom-[2%] left-[50%] bg-black rounded-full py-[0.7] px-1.5'>
                  {totalQuantity}
                </span>
              )}
            </span>
          </Link>
        </div>

        {/*toggle button */}
        <div className='md:hidden flex '>
          <button
            type='button'
            onClick={handleToggle}
            className='inline-flex items-center justify-center focus:outline-none text-xl text-dark/90 z-[99]'
          >
            {toggle === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {toggle ? (
        <div className='md:hidden'>
          <div
            onClick={handleOpen}
            className={`w-screen h-screen fixed z-[98] bg-dark top-20 left-0 right-0 bottom-0 flex text-light/80 text-lg justify-center items-center ${
              toggle ? `` : "hidden"
            }`}
          >
            <div>
              <ul className='flex flex-col gap-2 items-center -mt-24'>
                <li>
                  <Link href='/' className='link-item'>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href='/products' className='link-item'>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href='/gallery' className='link-item'>
                    gallery
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
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
