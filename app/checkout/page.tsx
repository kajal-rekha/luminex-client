import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

const Checkout = () => {
  return (
    <div className='sp wrapper mt-40 min-h-screen text-center'>
      <p className='text-2xl font-semibold text-dark/75'>
        Page is not ready yet.
      </p>
      <p className='text-2xl font-semibold text-dark/75'>
        Please check back later for updates.
      </p>

      <div className='mt-7'>
        <Link href='/' className={buttonVariants({ variant: "orange" })}>
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
