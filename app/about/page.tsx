import Overlay from "@/components/ui/Overlay";

const AboutPage = () => {
  return (
    <main className='about-page'>
      <div className='about-bg'></div>
      <Overlay />
      <h2 className='absolute top-[45%] left-[34%] text-gray font-bold text-7xl'>
        About Luminex
      </h2>
      <p className='absolute top-[58%] left-[20%] text-gray font-medium text-3xl '>
        Luminex Jewelry dazzles with timeless elegance, offering radiant gems,
        expert craftsmanship, and personalized adornments—transforming moments
        into cherished memories with enduring beauty and style.
      </p>
      <div className='wrapper sp'>
        <h3 className='text-5xl max-w-xl text-center mx-auto text-orange'>
          Timeless Elegance and Radiant Gems
        </h3>
        <h5 className='text-3xl max-w-4xl text-center mx-auto mt-5'>
          Discover the Artistry of Craftsmanship and Personalized Adornments,
          Elevating Every Moment into a Cherished Expression of Individual
          Style.
        </h5>
        <p className='text-2xl mt-5'>
          Step into the enchanting world of Luminex Jewelry, where brilliance
          meets sophistication. Our collection transcends ordinary adornments,
          offering a symphony of radiant gems meticulously crafted to tell your
          unique story. Experience the fusion of timeless beauty and
          personalized elegance, making every moment a luminous celebration of
          your distinctive style.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
