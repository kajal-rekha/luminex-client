import About from "@/components/About";
import ProductPage from "../products/page";
import Shop from "../shop/page";
import Slider from "./_components/Slider";

const HomePage = () => {
  return (
    <main className=''>
      <Slider />
      <Shop />
      <ProductPage />
      <About />
    </main>
  );
};

export default HomePage;
