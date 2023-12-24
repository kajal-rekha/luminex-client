import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | Blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
