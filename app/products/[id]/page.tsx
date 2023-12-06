"use client";

import Button from "@/components/ui/Button";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import useFetch from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import ProductItem from "./_components/ProductItem";

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const {
    data: productItem,
    isLoading,
    error,
  } = useFetch(`/api/products/${params.id}`);

const router = useRouter()
  return (
    <main className="">
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center">
          <Loading isLoading={isLoading} />
        </div>
      )}

      {error && (
        <div className="flex min-h-screen flex-col items-center justify-center gap-2.5">
          <Error error={error.message} />
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      )}

      {productItem && <ProductItem item={productItem}/>}
    </main>
  );
};

export default ProductDetailsPage;
