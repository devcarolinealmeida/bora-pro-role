import { SliderCardHero } from "../../components/SliderCardHero";

export const Hero = () => {
  return (
    <>
      <section className="_hero container max-w-7xl flex flex-col justify-center min-h-[30vw] py-9">
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
      </section>
      <SliderCardHero />
    </>
  );
};
