import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AniFury | Authentication",
    description: "Login or Create a Account for your favorite anime streaming application! AniFury."
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex relative justify-center items-center h-[100lvh] xs:bg-primary">
      {children}
    </main>
  );
}
