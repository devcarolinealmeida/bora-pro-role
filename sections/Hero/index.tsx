'use client';
import Link from "next/link";
import SliderCardHero from "../../components/SliderCardHero";
import TagHello from '../../public/We_are_Cami_e_Joao.svg';
import { motion } from "framer-motion";
import { WordsPullUp } from "../../components/words-pull-ul";

export const Hero = () => {
  return (
    <section className="_hero pt-4 md:pt-12 pb-24 flex flex-col bg-[#B1ABF4] overflow-x-clip" id="top">
      <div className="container">
        <div className="flex flex-col items-center relative">
          <h2 
          className="text-center md:max-w-[24ch] mb-8"><WordsPullUp text="Vida, Viagens, Vlog"/></h2>
          <motion.div
          initial={{
            transform: 'rotateZ(-35deg)',
            transformOrigin: 'top center',
          }} 
          animate={{
            transform: 'rotateZ(35deg)',  
          }}
          exit={{
            transform: 'rotateZ(0)'
          }}
          
          transition={{
            ease: 'easeInOut',
            repeat: Infinity,
            duration: 1,
            repeatType: 'reverse',
           
          }}
          
          className="_tag-hello absolute top-[25%] md:top-[50%] right-0">
            <TagHello className="w-[5.5rem] h-[4.5rem] md:w-[7.5rem] md:h-[6.5rem]"/>
          </motion.div>
          <p className="text-xl lg:text-2xl text-center max-w-[24ch] md:max-w-[42ch] mb-8">
            Dois brasileiros aprendendo a viver na Itália
          </p>
          <Link className="btn-pulse" href="#quem_somos" role="link" aria-label="Clique e descubra mais">
            <span>Descubra mais</span>
          </Link>
        </div>
      </div>
      <SliderCardHero />
    </section>
  );
};
