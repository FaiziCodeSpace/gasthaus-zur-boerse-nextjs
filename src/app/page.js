// Home page
import { Hero } from "@/components/home/Hero";
import SignatureDishes from "@/components/home/SignatureDishes";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome/>
      <SignatureDishes/>
    </>
  );
}
