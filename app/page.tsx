import { ChiSiamo } from "../sections/ChiSiamo/page";
import { Hero } from "../sections/Hero/page";
import { PercheSeguirci } from "../sections/PercheSeguirci/page";
import VideosYoutube from "../sections/VideosYoutube/page";


export default function Home() {
  return (
    <>
      <Hero/>
      <ChiSiamo/>
      <PercheSeguirci/>
      <VideosYoutube/>
    </>
  );
}
