"use client";
import Cami_Joao from "../assets/bora_pro_role-joao-e-cami.jpg";
import Cami_Joao_2 from "../assets/bora_pro_role-joao-e-cami-2.jpg";
import Cami_Joao_3 from "../assets/bora_pro_role-joao-e-cami-3.jpg";
import Cami_Joao_4 from "../assets/bora_pro_role-joao-e-cami-4.jpg";
import Cami_Joao_5 from "../assets/bora_pro_role-joao-e-cami-5.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export const SliderCardHero = () => {
  return (
    <div className="pt-4 pb-12">
      <div className="flex overflow-hidden ">
        <motion.div
          className="flex gap-4 flex-none pr-4"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}>
          <Image
            src={Cami_Joao}
            className="card-slider"
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_5}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_3}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_2}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_4}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            src={Cami_Joao}
            className="card-slider"
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_5}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_3}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_2}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
          <Image
            className="card-slider"
            src={Cami_Joao_4}
            alt="Cami e Joao"
            width={238}
            height={209}
          />
        </motion.div>
      </div>
    </div>
  );
};
