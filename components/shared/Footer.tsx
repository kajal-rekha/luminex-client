import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Overlay from "../ui/Overlay";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-bg'>
        <Overlay />
        <div className='wrapper sp grid grid-cols-2  lg:grid-cols-3  xl:grid-cols-5 gap-10 md:gap-8 lg:gap-6 xl:mt-12 2xl:mt-24'>
          <div className='w-full'>
            <Link
              href='/'
              className='text-xl lg:text-3xl font-semibold text-orange/70'
            >
              Luminex
            </Link>
            <p className='text-gray/80 mt-5 w-full leading-8 text-sm lg:text-lg'>
              Discover Luminex, my <br /> unique jewelry store online. <br />{" "}
              Luminex is your destination for distinctive, fashionable jewelry.
            </p>
          </div>
          <div className='w-full '>
            <h2 className='text-xl md:text-2xl font-semibold text-gray/80 '>
              Quick links
            </h2>
            <ul className='flex flex-col  space-y-4'>
              <li className='mt-3'>
                <Link
                  href='/'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href='/products'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href='/about'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <h2 className='text-xl md:text-2xl font-semibold text-gray/80 '>
              More links
            </h2>
            <ul className='space-y-4'>
              <li className='mt-3'>
                <Link
                  href='/testimonial'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full '>
            <h2 className='text-xl md:text-2xl font-semibold text-gray/80 '>
              Services
            </h2>
            <ul className=' flex flex-col space-y-4'>
              <li className='text-gray/80 hover:text-orange/80 eq mt-3'>
                Shipping Policy
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Compensation First
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Return Policy
              </li>

              <li className='text-gray/80 hover:text-orange/80 eq'>
                Shipping Info
              </li>
            </ul>
          </div>
          <div className='w-full '>
            <h2 className='text-xl md:text-2xl text-gray/80 font-semibold  '>
              Contact Us
            </h2>
            <ul className='space-y-4'>
              <li className='text-gray/80 hover:text-orange/80 eq mt-3'>
                Email: luminex123@gmail.com
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Phone: +1 234 567 890
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Address: No 40 Baria Sreet 133/2, NewYork, USA
              </li>
            </ul>
            <div className=' social-icons mt-5 flex gap-10'>
              <Link
                href='https://www.facebook.com/anowar.kajal'
                className='border border-gray/80 p-2 rounded-full hover:bg-orange/80  eq '
              >
                <FaFacebookF className='text-xl text-gray/80 ' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/kajal-rekha-81262b264'
                className='border border-gray/80 p-2 rounded-full hover:border-orange/80  duration-500'
              >
                <FaLinkedinIn className='text-xl text-gray/80' />
              </Link>
              <Link
                href='https://twitter.com/KajalRekha14'
                className='border border-gray/80 p-2 rounded-full hover:border-orange/80  duration-500'
              >
                <FaTwitter className='text-xl text-gray/80' />
              </Link>
            </div>
          </div>
          O
        </div>
      </div>
      <div className='bg-gray/90 p-10'>
        <p className='text-center text-black text-lg'>
          &copy; {new Date().getFullYear()}{" "}
          <Link href='/' className='link-item'>
            Luminex
          </Link>{" "}
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
