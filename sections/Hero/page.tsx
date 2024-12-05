import { SliderCardHero } from "../../components/SliderCardHero";

export const Hero = () => {
  return (
    <>
      <section className="_hero container max-w-7xl flex flex-col justify-center min-h-[30vw] py-9">
        <div className="">
          <h2 className="max-w-[24ch] leading-none mb-4">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-xl lg:text-2xl mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            className="bg-black text-white px-6 py-2 rounded-3xl font-asap-condens-500 uppercase text-base"
            href="#chi-siamo">
            Descubra mais
          </a>
        </div>
      </section>
      <SliderCardHero />
    </>
  );
};
