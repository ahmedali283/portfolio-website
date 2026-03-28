import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import "../styles/style.css";
import "../styles/bootstrap.min.css";
import "../styles/swiper-bundle.min.css";
import "../styles/animate.css";
import "../styles/odometer.min.css";
import "../styles/styles.css";

export const metadata: Metadata = {
  title: "Davies - Personal Portfolio HTML Template",
  description: "Davies - Personal Portfolio is a sleek and modern HTML template designed for developers, designers, freelancers, and professionals who want to showcase their work online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="counter-scroll" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
