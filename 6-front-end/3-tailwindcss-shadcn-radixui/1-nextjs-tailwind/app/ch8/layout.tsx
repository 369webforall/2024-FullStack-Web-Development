import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { Oswald, Montserrat } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"], weight:['700'], variable:'--oswald'});
const moon = Montserrat({ subsets: ["latin"], weight:['400'], variable:'--moon'});

export default function Ch8Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-full grid grid-rows-layout ${oswald.className} ${moon.className}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
