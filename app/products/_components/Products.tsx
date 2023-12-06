"use client";

import { buttonVariants } from "@/components/ui/Button";
import HorizontalTab from "@/components/ui/HorizontalTab";
import SectionTitle from "@/components/ui/SectionTitle";
import useFetch from "@/hooks/use-fetch";
import { cn } from "@/lib/utils";
import { productType } from "@/types/productType";
import Link from "next/link";

import ProductItem from "./ProductCart";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

const Products = () => {
  const { data: products, error, isLoading } = useFetch("/api/products");
  const pathname = usePathname();
  console.log(pathname);
  return (
    <section className="wrapper sp ">
      <SectionTitle title="Explore our products" />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {products && (
        <>
          <HorizontalTab
            tabs={["Bracelet", "Earrings", "Ring", "Necklace", "Hairpin"]}
          >
            {/* Bracelet */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {pathname === "/products" &&
                products
                  .filter((item: productType) => item.category === "Bracelet")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
              {pathname === "/" &&
                products
                  .filter((item: productType) => item.category === "Bracelet")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .slice(0, 6)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Earrings */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {pathname === "/products" &&
                products
                  .filter((item: productType) => item.category === "Earrings")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}

              {pathname === "/" &&
                products
                  .filter((item: productType) => item.category === "Earrings")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .slice(0, 6)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Ring */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {pathname === "/products" &&
                products
                  .filter((item: productType) => item.category === "Ring")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
              {pathname === "/" &&
                products
                  .filter((item: productType) => item.category === "Ring")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .slice(0, 6)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Necklace */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {pathname === "/products" &&
                products
                  .filter((item: productType) => item.category === "Necklace")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
              {pathname === "/" &&
                products
                  .filter((item: productType) => item.category === "Necklace")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .slice(0, 6)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>

            {/* Hairpins */}

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {pathname === "/products" &&
                products
                  .filter((item: productType) => item.category === "Hairpin")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
              {pathname === "/" &&
                products
                  .filter((item: productType) => item.category === "Hairpin")
                  .sort((a: productType, b: productType) => b.price - a.price)
                  .slice(0, 6)
                  .map((item: productType) => (
                    <ProductItem key={item._id} productItem={item} />
                  ))}
            </div>
          </HorizontalTab>

          {pathname === "/" && products && (
            <div className="mt-20 flex justify-center">
              <Link
                href="/products"
                className={cn(buttonVariants({ variant: "orange" }))}
              >
                View all products
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Products;
