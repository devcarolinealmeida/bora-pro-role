import { ChiSiamo } from "../sections/ChiSiamo/page";
import { Footer } from "../sections/Footer/page";
import Header from "../sections/Header/page";
import { Hero } from "../sections/Hero/page";
import { PercheSeguirci } from "../sections/PercheSeguirci/page";
import VideosYoutube from "../sections/VideosYoutube/page";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <ChiSiamo/>
      <PercheSeguirci/>
      {/* <VideosYoutube/> */}
      <Footer/>
    </>
  );
}
