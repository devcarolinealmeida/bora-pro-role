import { QuemSomos } from "../sections/QuemSomos/page";
import { Hero } from "../sections/Hero/page";
import { PorqueNosSeguir } from "../sections/PorqueNosSeguir/page";
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
