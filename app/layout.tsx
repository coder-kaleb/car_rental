import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
  title: "Car hub",
  description: "The best car hub in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
