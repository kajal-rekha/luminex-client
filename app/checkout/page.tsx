import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  return (
    <main className='wrapper sp mt-20'>
      <h2 className='text-center mx-auto mb-20'>Please Provite your details</h2>

      <div className='checkout-bg overflow-hidden min-h-screen mt-10 grid grid-cols md:grid-cols-2 gap-28'>
        <div className=' w-full group overflow-hidden'>
          <Image
            src='https://res.cloudinary.com/dh0ado2ir/image/upload/v1702890630/grid-banner-1_ouerkf.webp'
            alt='checkout image'
            width={850}
            height={1000}
            priority
            className='h-full w-full rounded-sm group-hover:scale-125 eq'
          />
        </div>
        <div className='w-full '>
          <form className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                // value='name'
                placeholder='write your name'
                readOnly
                className='eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                // value='email'
                placeholder='write your email'
                readOnly
                className='eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                id='address'
                // value='address'
                placeholder='write your address'
                readOnly
                className='eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='name'>Mobile</label>
              <input
                type='text'
                id='mobile'
                // value='mobile'
                placeholder='write your mobile number'
                readOnly
                className='eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='quentity'>Cart Quentity</label>
              <input
                type='number'
                id='quentity'
                // value='quentity'
                placeholder='Cart Quentity'
                readOnly
                className='eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange'
              />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='sbutotal'>Subtotal</label>
              <input
                type='number'
                id='subtotal'
                // value='subtotal'
                placeholder='Subtotal'
                readOnly
                className='eq w-full rounded-xl border border-gray bg-transparent px-3 py-5 outline-none focus:border-orange'
              />
            </div>
            <Button variant='orange' type='submit'>
              Order Now
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
