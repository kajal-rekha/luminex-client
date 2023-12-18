import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | Contact",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
