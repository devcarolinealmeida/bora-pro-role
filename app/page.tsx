import { ChiSiamo } from "../sections/ChiSiamo/page";
import Header from "../sections/Header/page";
import { Hero } from "../sections/Hero/page";
import { PercheSeguirci } from "../sections/PercheSeguirci/page";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <ChiSiamo/>
      <PercheSeguirci/>
    </>
  );
}
