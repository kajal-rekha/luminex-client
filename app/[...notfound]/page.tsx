import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="wrapper section-padding mt-56 text-center min-h-screen">
      <p className="mb-4 text-9xl font-bold tracking-widest text-dark">
        4<span className="text-red">0</span>4
      </p>
      <p className="text-2xl font-semibold text-dark/75">
        Uh-oh! The requested page seems to be missing.
      </p>
      <div className="mt-8">
        <Link href="/" className={buttonVariants({ variant: "orange" })}>
          Go to home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
