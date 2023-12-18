import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | Checkout",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
