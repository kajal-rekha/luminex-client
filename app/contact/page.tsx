"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdHome, MdContactPhone, MdOutlineMailOutline } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    message: string;
  }>({ fullName: "", email: "", message: "" });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //emailjs integration
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then(
        () => {
          toast.success("Your message sent!");
          setFormData({
            fullName: "",
            email: "",
            message: "",
          });
        },
        () => {
          toast.error("Failed, please try again later!");
        }
      );
    console.log(formData);
  };

  return (
    <main className='wrapper sp -mt-20 lg:-mt-5'>
      <SectionTitle title='Contact' />

      <div className='grid grid-cols md:grid-cols-2 gap-20 lg:mt-20'>
        <div data-aos='fade-right' data-aos-duration='3000'>
          <h2 className='mb-5 lg:mb-10 text-2xl lg:text-5xl'>
            Get In Touch With Us
          </h2>
          <p className='text-lg lg:text-xl '>
            We look forward to hearing from you regarding any data-related
            inquiries or concerns. Contact us for prompt assistance.Feel free to
            reach out to us for any data-related issues. We are here to help!
          </p>
          <div className=' mt-10 lg:mt-14'>
            <div
              data-aos='fade-right'
              data-aos-duration='3000'
              className='flex flex-row gap-5'
            >
              <span className='bg-orange  px-3 flex items-center text-2xl rounded-xl h-12 text-gray/80'>
                <MdHome />
              </span>
              <div className='flex flex-col gap-5'>
                <p className='font-semibold text-lg lg:text-xl'>Our Location</p>
                <p className='text-dark/70 -mt-5'>99 St. Jambo Park</p>
              </div>
            </div>
            <div
              data-aos='fade-right'
              data-aos-duration='3000'
              className='flex flex-row gap-5 mt-10 lg:mt-14'
            >
              <span className='bg-orange  px-3 flex items-center text-2xl rounded-xl h-12 text-gray/80'>
                <MdContactPhone />
              </span>
              <div className='flex flex-col gap-5'>
                <p className='font-semibold text-lg'>Phone Number</p>
                <p className='text-dark/70 -mt-5'>+8801236659874</p>
              </div>
            </div>
            <div
              data-aos='fade-right'
              data-aos-duration='3000'
              className='flex flex-row gap-5 mt-10 lg:mt-14'
            >
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

        <div
          data-aos='fade-left'
          data-aos-duration='3000'
          className='w-full bg-orange rounded-lg py-3 px-5 lg:py-7 lg:px-14'
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='contact-form flex flex-col text-lg gap-10 py-10  mx-auto '
          >
            <div className='form-control flex flex-col gap-2'>
              <input
                type='text'
                name='fullname'
                placeholder='Full Name'
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className='eq w-full rounded-xl border border-gray px-3 py-5 outline-none focus:border-light bg-light'
              />
            </div>
            <div className='form-control flex flex-col gap-2'>
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className='eq w-full rounded-xl border border-gray px-3 py-5 outline-none focus:border-light bg-light '
              />
            </div>

            <div className='form-control flex flex-col gap-2'>
              <textarea
                placeholder='Message'
                name='message'
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className='eq w-full rounded-xl border border-gray px-3 py-5 outline-none focus:border-light bg-light resize-none'
              />
            </div>
            <div className='submit  rounded-xl py-5 px-8 text-center overflow-hidden  font-medium hover:bg-light/80  bg-light eq'>
              <button
                role='link'
                type='submit'
                className=' text-dark/80 uppercase'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
