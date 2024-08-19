import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { productType } from "@/types/productType";
import axios from "axios";
import { useSelector } from "react-redux";
import { buttonVariants } from "./ui/Button";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/features/cart/cartSlice";

interface payButtonProps {
  cartItems: productType[];
}

const PayButton: React.FC<payButtonProps> = ({ cartItems: data }) => {
  const user = useSelector((state: RootState) => state.auth) as any;
  const url = process.env.NEXT_PUBLIC_BASE_URL;
   const dispatch = useDispatch();

  const handleCheckout = () => {
    axios
      .post(`${url}/api/stripe/create-checkout-session`, {
        data,
        userId: user._id,
      })
      .then((res: any) => {
        if (res.data.url) {    
          window.location.href = res.data.url;
           dispatch(clearCart());
        } else {
          console.error(
            "Error: 'url' property is missing in the server response."
          );
        }
      })
      .catch((err: any) => {
        console.log(err.message);
      });

    // console.log(data);
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
