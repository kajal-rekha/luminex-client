import About from "@/components/About";
import ProductPage from "../products/page";
import Shop from "../shop/page";
import Slider from "./_components/Slider";
import Testimonial from "../testimonial/page";

const HomePage = () => {
  return (
    <main className=''>
      <Slider />
      <Shop />
      <ProductPage />
      <About />
      <Testimonial/>
    </main>
  );
};

export default HomePage;
