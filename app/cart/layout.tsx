import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | Cart Page",
};

export default function CartPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
