import { ChiSiamo } from "../sections/ChiSiamo/page";
import Header from "../sections/Header/page";
import { Hero } from "../sections/Hero/page";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <ChiSiamo/>
    </>
  );
}
