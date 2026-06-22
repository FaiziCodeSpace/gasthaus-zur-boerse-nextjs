// Home page
import Events from "@/components/home/Events";
import Guesthouse from "@/components/home/Guesthouse";
import { Hero } from "@/components/home/Hero";
import Rooms from "@/components/home/Rooms";
import SeasonalDishes from "@/components/home/SeasonalDishes";
import Services from "@/components/home/Services";
import SignatureDishes from "@/components/home/SignatureDishes";
import Welcome from "@/components/home/Welcome";


export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Events />
      <SignatureDishes />
      <SeasonalDishes/>
      <Guesthouse />
      <Rooms />
      <Services/>
    </>
  );
}
