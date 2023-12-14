import Overlay from "@/components/ui/Overlay";

const AboutPage = () => {
  return (
    <main className='about-page'>
      <div className='about-bg '></div>
      <Overlay />
      <h2 className='absolute top-[45%] left-[34%] text-gray font-bold text-7xl'>
        About Luminex
      </h2>
      <p className='absolute top-[58%] left-[20%] text-gray font-medium text-3xl '>
       Luminex Jewelry dazzles with timeless elegance, offering radiant gems, expert craftsmanship, and personalized adornments—transforming moments into cherished memories with enduring beauty and style.
      </p>
    </main>
  );
};

export default AboutPage;
