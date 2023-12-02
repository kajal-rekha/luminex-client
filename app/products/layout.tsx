import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | Products",
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
