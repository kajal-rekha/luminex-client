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
        <p className='text-xl lg:text-2xl font-semibold text-dark/75 max-w-2xl mx-auto'>
          {`We're excited to inform you that your order has been successfully received and is now in the processing stage!`}
        </p>
        <p className='text-xl lg:text-2xl  font-semibold text-dark/75 max-w-xl mx-auto mt-3'>
          {`Thank you for choosing us – we appreciate your trust in our service!`}
        </p>

        <div className='mt-7'>
          <Link
            href='/products'
            className={buttonVariants({ variant: "orange" })}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
