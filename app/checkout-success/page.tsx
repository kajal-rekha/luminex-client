import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

const CheckoutSuccess = () => {
  return (
    <div className='sp wrapper mt-20 min-h-screen text-center mx-auto'>
      <div className='mx-auto bg-light max-w-3xl py-14 px-5 shadow-lg rounded-md'>
        <span className='inline-block text-5xl text-[#89e386] border rounded-full p-1 -mt-5'>
          <TiTick />
        </span>
        <h2 className='mb-5 text-3xl lg:text-4xl max-w-2xl'>
          Congratulations on a Seamless Checkout!
        </h2>

        <div className='mt-7'>
          <Link href='/order' className={buttonVariants({ variant: "orange" })}>
            Go to order page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
