"use client";

import useFetch from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";
import { productType } from "@/types/productType";
import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import HorizontalTab from "../ui/HorizontalTab";
import SectionTitle from "../ui/SectionTitle";
import ProductItem from "./ProductItem";

interface ProductProps {
  fromProductPage?: boolean;
}
const Products: React.FC<ProductProps> = ({ fromProductPage }) => {
  const { data: products, error, isLoading } = useFetch("/api/products");
  console.log(products);

  return (
    <section className="wrapper sp ">
      <SectionTitle title="Explore our products" />

      {products && products.length > 0 && (
        <>
          <HorizontalTab
            tabs={["Earrings", "Bracelet", "Ring", "Necklace", "Hairpin"]}
          >
            {/* Earrings */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {!fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Earrings")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .slice(0, 8)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}

              {fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Earrings")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Bracelet */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {!fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Bracelet")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .slice(0, 8)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}

              {fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Bracelet")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Ring */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {!fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Ring")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .slice(0, 8)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}

              {fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Ring")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Necklace */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {!fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Necklace")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .slice(0, 8)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}

              {fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Necklace")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Hairpins */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {!fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Hairpin")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .slice(0, 8)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}

              {fromProductPage &&
                products
                  .filter((item: productType) => item.category === "Hairpin")
                  .sort((a: productType, b: productType) => a.price - b.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>
          </HorizontalTab>

          {!fromProductPage && products && products.length > 0 && (
            <div className="mt-20 flex justify-center">
              <Link
                href="/products"
                className={cn(buttonVariants({ variant: "orange" }))}
              >
                View all products
              </Link>
            </div>
          )}
          {/* <Link href="/products">View all products</Link> */}
        </>
      )}
    </section>
  );
};

export default Products;
