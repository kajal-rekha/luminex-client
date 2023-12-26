
interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='mb-10'>
      <h2 data-aos='fade-right' data-aos-duration='1000' className='text-dark/90'>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
