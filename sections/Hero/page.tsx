import Link from "next/link";
import SliderCardHero from "../../components/SliderCardHero";
import TagHello from '../../public/We_are_Cami_e_Joao.svg'

export const Hero = () => {
  return (
    <section className="_hero flex flex-col bg-[#B1ABF4]" id="top">
      <div className="container max-w-7xl">
        <div className="flex flex-col items-center relative">
          <h2 className="text-center max-w-[24ch]- mb-4">Vida, Viagens, Vlog</h2>
          <TagHello className="w-[7.5rem] h-[4.5rem] absolute top-0 right-0"/>
          <p className="text-xl lg:text-2xl text-center mb-12">
            Dois brasileiros aprendendo a viver na Itália
          </p>
          <Link className="btn-pulse" href="#chi_siamo" role="link" aria-label="Clique e descubra mais">
            <span>Descubra mais</span>
          </Link>
        </div>
      </div>
      <SliderCardHero />
    </section>
  );
};
