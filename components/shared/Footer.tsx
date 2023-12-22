import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-bg'>
        <div className='wrapper sp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-4 '>
          <div className='w-full'>
            <Link href='/' className='text-3xl font-semibold text-orange/70'>
              Luminex
            </Link>
            <p className='text-gray/80 mt-5 w-full leading-8'>
              Discover Luminex, my unique jewelry store online. Luminex is your
              destination for distinctive, fashionable jewelry.
            </p>
          </div>

          <div className='w-full xl:ml-20 space-y-4'>
            <h2 className='text-2xl font-semibold text-gray/80 '>Services</h2>
            <ul className='text-gray/80 gap-3 flex flex-col'>
              <li className='hover:text-orange/80 eq'>Shipping Policy</li>
              <li className='hover:text-orange/80 eq'>Compensation First</li>
              <li className='hover:text-orange/80 eq'>Return Policy</li>

              <li className='hover:text-orange/80 eq'>Shipping Info</li>
            </ul>
          </div>

          <div className='w-full space-y-4'>
            <h2 className='text-2xl text-gray/80 font-semibold  '>
              Information
            </h2>
            <ul className='space-y-4'>
              <li className='text-gray/80 hover:text-orange/80 eq'>About Us</li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Delivery Information
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Privacy Policy
              </li>
            </ul>
          </div>

          <div className='w-full space-y-4'>
            <h2 className='text-2xl text-gray/80 font-semibold  '>
              Contact Us
            </h2>
            <ul className='space-y-4'>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Email: luminex123@gmail.com
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Phone: +1 234 567 890
              </li>
              <li className='text-gray/80 hover:text-orange/80 eq'>
                Address: No 40 Baria Sreet 133/2, NewYork, USA
              </li>
            </ul>
          </div>
        </div>

        <div className=''>
          <div className=' social-icons justify-center items-center mx-auto ml-[8%] -mt-20 flex gap-10'>
            <Link
              href='https://www.facebook.com/anowar.kajal'
              className='border border-gray/80 p-2 rounded-full hover:border-orange/80  duration-500 '
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

          <div className='justify-center items-center mx-auto ml-[32%] mt-10 mb-10'>
            <ul className='flex items-center gap-5 text-lg'>
              <li>
                <Link
                  href='/'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href='/shop'
                  className='link-item text-gray/80 hover:text-orange/80 eq'
                >
                  Shop
                </Link>
              </li> */}
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
              <li>
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
