import About from "@/components/About";
import ProductPage from "../products/page";
import Shop from "../shop/page";
import Slider from "./_components/Slider";
import Testimonial from "../testimonial/page";
import Contact from "../contact/page";
import Gallery from "../gallery/page";

const HomePage = () => {
  return (
    <main className=''>
      <Slider />
      <Shop />
      <ProductPage />
      <About />
      <Gallery />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default HomePage;
