import Image from "next/image";
import Header from "@/components/Header";
import { Nunito_Sans } from "@next/font/google";
import clsx from "clsx";

export const designer = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200"],
});

const Home = () => (
  <div className={designer.className}>
    <Header />
  </div>
);

export default Home;
