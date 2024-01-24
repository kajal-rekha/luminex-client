import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { productType } from "@/types/productType";
import axios from "axios";
import { useSelector } from "react-redux";
import { buttonVariants } from "./ui/Button";

interface payButtonProps {
  cartItems: productType[];
}

const PayButton: React.FC<payButtonProps> = ({ cartItems: data }) => {
  const user = useSelector((state: RootState) => state.auth) as any;
  console.log(user);

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const handleCheckout = () => {
    axios
      .post(
        `${url}/api/stripe/create-checkout-session`,
        {
          data,
          userId: user._id,
        }
      )
      .then((res: any) => {
        console.log("Server Response:", res.data);

        if (res.data.url) {
          window.location.href = res.data.url;
        } else {
          console.error(
            "Error: 'url' property is missing in the server response."
          );
        }
      })
      .catch((err: any) => {
        console.log(err.message);
      });

    console.log(data);
  };

    return (
      <>
        <div className='w-full text-md lg:text-lg'>
          <button
            onClick={handleCheckout}
            className={cn(buttonVariants({ variant: "orange", size: "full" }))}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </>
    );
};

export default PayButton;
