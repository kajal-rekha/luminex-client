"use client";

import About from "@/components/About";
import ProductPage from "../products/page";
import Slider from "./_components/Slider";
import Testimonial from "../testimonial/page";
import Contact from "../contact/page";
import Gallery from "../gallery/page";
import Blog from "../blog/page";
import Shop from "@/components/Shop";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const HomePage = () => {
    useSmoothScroll();
  return (
    <main className=''>
      <Slider />
      <Shop />
      <ProductPage />
      <Gallery />
      <About />
      <Testimonial />
      <Blog />
      <Contact />
    </main>
  );
};

export default HomePage;
