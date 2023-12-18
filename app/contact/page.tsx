import { buttonVariants } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { MdHome, MdContactPhone, MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <main className='wrapper sp mt-20'>
      <SectionTitle title='Contact' />

      <div className='grid grid-cols md: grid-cols-2 gap-20'>
        <div>
          <h2 className='mb-10'>Get In Touch With Us</h2>
          <p>
            We look forward to hearing from you regarding any data-related
            inquiries or concerns. Contact us for prompt assistance.Feel free to
            reach out to us for any data-related issues. We're here to help!
          </p>
          <div className='mt-16'>
            <div className='flex flex-row gap-5'>
              <span className='bg-orange  px-3 flex items-center text-2xl rounded-xl h-12 text-gray/80'>
                <MdHome />
              </span>
              <div className='flex flex-col gap-5'>
                <p className='font-semibold text-xl'>Our Location</p>
                <p className='text-dark/70 -mt-5'>99 St. Jambo Park</p>
              </div>
            </div>
            <div className='flex flex-row gap-5 mt-16'>
              <span className='bg-orange  px-3 flex items-center text-2xl rounded-xl h-12 text-gray/80'>
                <MdContactPhone />
              </span>
              <div className='flex flex-col gap-5'>
                <p className='font-semibold text-lg'>Phone Number</p>
                <p className='text-dark/70 -mt-5'>+8801236659874</p>
              </div>
            </div>
            <div className='flex flex-row gap-5 mt-16'>
              <span className='bg-orange px-3 flex items-center text-2xl rounded-xl h-12 text-gray/80'>
                <MdOutlineMailOutline />
              </span>
              <div className='flex flex-col gap-5'>
                <p className='text-lg font-semibold'>Email Address</p>
                <p className='text-dark/70 -mt-5'>lumine123x@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-orange rounded-lg p-14'>
          <form className='flex flex-col gap-7 mt-5'>
            <div className=''>
              <input
                type='text'
                name='name'
                placeholder='write your name'
                readOnly
                className='eq w-full rounded-xl border border-gray px-3 py-5 outline-none focus:border-light bg-light'
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder='write your email'
                readOnly
                className='eq w-full rounded-xl border border-gray px-3 py-5 outline-none focus:border-light bg-light'
              />
            </div>
            <div>
              <textarea
                placeholder='write your message'
                name='message'
                rows={1}
                cols={30}
                className='eq w-full rounded-xl border border-gray line-none py-12 px-5 resize-none outline-none focus:border-light bg-light'
              />
            </div>
            <button type='submit' className='bg-light py-5 px-2 rounded-xl font-semibold tracking-widest text-dark'>
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
