import Link from "next/link";
import SliderCardHero from "../../components/SliderCardHero";

export const Hero = () => {
  return (
    <section className="_hero flex flex-col bg-[#B1ABF4]" id="top">
      <div className="container max-w-7xl">
        <div className="">
          <h2 className="max-w-[24ch] mb-4">Vida, Viagens, Vlog</h2>
          <p className="text-xl lg:text-2xl mb-12">
            Dois brasileiros aprendendo a viver na Itália
          </p>
          <Link className="btn" href="#chi_siamo">
            Descubra mais
          </Link>
        </div>
      </div>
      <SliderCardHero />
    </section>
  );
};
