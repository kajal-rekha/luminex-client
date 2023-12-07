import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-gray/90 backdrop-blur-xl">
      {/* NAV LEFT */}
      <nav className="wrapper flex items-center justify-between gap-5">
        <Link href="/" className="text-2xl font-semibold">
          luminex
        </Link>

        {/* NAV MID */}

        <ul className="flex items-center gap-5 text-lg">
          <li>
            <Link href="/" className="link-item">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="link-item">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/products" className="link-item">
              Products
            </Link>
          </li>

          <li>
            <Link href="/about" className="link-item">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="link-item">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link-item">
              Contact
            </Link>
          </li>
        </ul>

        {/* NAV RIGHT */}
        <ul className="flex gap-5 items-center justify-center">
          <li>
            <Link
              href="/user/sign-in"
              className={buttonVariants({ variant: "orange" })}
            >
              Sign in
            </Link>
          </li>
          <Link href="/user/order">
            <span className="text-2xl relative ">
              <FiShoppingCart />
              <span className="absolute text-orange text-sm font-semibold bottom-[40%] left-[70%] bg-black rounded-full py-[0.5] px-1">
                10
              </span>
            </span>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
