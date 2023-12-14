import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | About Page",
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
