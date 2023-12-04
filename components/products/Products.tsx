import HorizontalTab from "../ui/HorizontalTab";
import SectionTitle from "../ui/SectionTitle";

const Products = () => {
  return (
    <section className="wrapper sp ">
      <SectionTitle title="Explore our products" />
      <div className="mt-20">
        <HorizontalTab tabs={["tab 1", "tab 2", "tab 3", "tab 4", "tab 5"]}>
          <p>content 1</p>
          <p>content 2</p>
          <p>content 3</p>
          <p>content 4</p>
          <p>content 5</p>
        </HorizontalTab>
      </div>
    </section>
  );
};

export default Products;
