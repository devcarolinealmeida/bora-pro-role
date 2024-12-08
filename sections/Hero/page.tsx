import Slider from "../../components/Slider";
import { SliderCardHero } from "../../components/SliderCardHero";

export const Hero = () => {
  return (
      <section className="_hero flex flex-col bg-[#B1ABF4]">
        <div className="container max-w-7xl">
          <div className="">
            <h2 className="max-w-[24ch] mb-4">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-xl lg:text-2xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              className="btn"
              href="#chi-siamo">
              Descubra mais
            </a>
          </div>
        </div>
        <Slider/>
      </section>
  );
};
