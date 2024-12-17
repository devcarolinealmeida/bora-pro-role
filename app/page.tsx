import { QuemSomos } from "../sections/QuemSomos";
import { Hero } from "../sections/Hero";
import { PorqueNosSeguir } from "../sections/PorqueNosSeguir";
import VideosYoutube from "../sections/VideosYoutube/page";



export default function Home() {
  return (
    <>
      <Hero/>
      <QuemSomos/>
      <PorqueNosSeguir/>
      <VideosYoutube/>
    </>
  );
}
