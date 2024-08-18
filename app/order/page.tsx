import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";


const OrderPage = () => {
  return (
    <div className='sp wrapper mt-20 min-h-screen text-center mx-auto'>
      <p className='text-xl lg:text-2xl font-semibold text-dark/75 max-w-2xl mx-auto'>
        {`We're excited to inform you that your order has been successfully received and is now in the processing stage!`}
      </p>
      <p className='text-xl lg:text-2xl  font-semibold text-dark/75 max-w-xl mx-auto mt-3'>
        {`Thank you for choosing us – we appreciate your trust in our service!`}
      </p>

      <div className='mt-7'>
        <Link href='/dashboard/user' className={buttonVariants({ variant: "orange" })}>
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}

export default OrderPage