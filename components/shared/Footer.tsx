import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Overlay from "../ui/Overlay";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-bg bg-gray/90 '>
        <div className='wrapper sp grid grid-cols lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-8 lg:gap-6 xl:mt-12 2xl:mt-24 -mt-7 text-light/60'>
          <div className='w-full '>
            <Link
              href='/'
              className='text-xl lg:text-3xl font-semibold text-orange'
            >
              Luminex
            </Link>
            <p className='mt-5 w-full leading-8 lg:text-lg'>
              Discover Luminex, my unique jewelry store online. Luminex is your
              destination for distinctive, fashionable jewelry.
            </p>
          </div>
          <div className='w-full  hidden md:block'>
            <h2 className='text-xl md:text-2xl font-semibold '>Quick links</h2>
            <ul className='flex flex-col space-y-4 font-medium'>
              <li className='mt-3'>
                <Link href='/' className='link-item hover:text-orange/80 eq'>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href='/products'
                  className='link-item hover:text-orange/80 eq'
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href='/about'
                  className='link-item  hover:text-orange/80 eq'
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full hidden md:block'>
            <h2 className='text-xl md:text-2xl font-semibold '>More links</h2>
            <ul className='space-y-4 hidden md:block font-medium'>
              <li className='mt-3'>
                <Link
                  href='/testimonial'
                  className='link-item  hover:text-orange/80 eq'
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='link-item  hover:text-orange/80 eq'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='link-item hover:text-orange/80 eq'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full  hidden md:block'>
            <h2 className='text-xl md:text-2xl font-semibold '>Services</h2>
            <ul className='flex flex-col space-y-4  md:block font-medium'>
              <li className=' hover:text-orange/80 eq mt-3 '>
                Shipping Policy
              </li>
              <li className=' hover:text-orange/80 eq '>Compensation First</li>
              <li className=' hover:text-orange/80 eq'>Return Policy</li>

              <li className=' hover:text-orange/80 eq'>Shipping Info</li>
            </ul>
          </div>

          <div className='w-full lg:mt-0 mt-1'>
            <h2 className='text-xl md:text-2xl  font-semibold  '>Contact Us</h2>
            <ul className='space-y-4 font-medium '>
              <li className=' hover:text-orange/80 eq mt-3 '>
                Email: luminex123@gmail.com
              </li>
              <li className=' hover:text-orange/80 eq'>
                Phone: +1 234 567 890
              </li>
              <li className=' hover:text-orange/80 eq'>
                Address: No 40 Baria Sreet 133/2, NewYork, USA
              </li>
            </ul>

            <div className='social-icons mt-5 flex gap-10'>
              <Link
                href='https://www.facebook.com/anowar.kajal'
                className='border border-light p-2 border-14px-orange rounded-full eq '
              >
                <FaFacebookF className='text-xl ' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/kajal-rekha-81262b264'
                className='border border-light p-2 border-14px rounded-full eq'
              >
                <FaLinkedinIn className='text-xl ' />
              </Link>
              <Link
                href='https://twitter.com/KajalRekha14'
                className='border border-light p-2 rounded-full eq'
              >
                <FaTwitter className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-light/90 p-10'>
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
