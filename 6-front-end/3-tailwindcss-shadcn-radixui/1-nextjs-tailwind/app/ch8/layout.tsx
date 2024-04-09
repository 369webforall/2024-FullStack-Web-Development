import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
export default function Ch8Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full grid grid-rows-layout">
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
