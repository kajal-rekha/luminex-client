import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luminex | Sign Up",
  description: "Generated by create next app",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
