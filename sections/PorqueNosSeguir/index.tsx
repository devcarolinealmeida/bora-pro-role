"use client";
import { SliderSuperCheap } from "../../components/SliderSuperCheap";
import { TagEmoji, TagTitle, Emoji } from "../../components/TagEmoji";
import CamiEjoao from "../../public/bora_pro_role-joao-e-cami-8.svg";
import { motion } from "framer-motion";

export const PorqueNosSeguir = () => {
  return (
    <section className="bg-[#FCE688] overflow-clip pb-0" id="porque_seguir">
      <div className="container max-w-7xl min-h-svh">
        <div className="">
          <h4 className="mb-4">Porque nos seguir</h4>
          <p className="mb-8 md:max-w-[76ch]">
            Te mostramos como é a vida de verdade na Europa, com seus altos e
            baixos, do ponto de vista de dois estudantes que, literalmente,
            tiveram que aprender do zero como é viver no exterior. Tá achando
            pouco? Vamos te mostrar também nossos passeios de bicicleta, viagens
            longas e curtas, compartilhando informações que poderão ser
            importantes nas suas próximas viagens.
          </p>
        </div>
        <div className="relative max-w-xl mx-auto pb-12 md:pb-24">
          <motion.div
            className="inline-flex justify-center w-full"
            initial={{ opacity: 0, translateY: "100px" }}
            whileInView={{ opacity: 1, translateY: "0" }}>
            <CamiEjoao className="max-w-[20rem]" />
          </motion.div>
          <div className="flex">
            <div className="flex flex-col">
              {/* icon vida Europa */}
              <motion.div
                className="_vida-eu inline-block relative bottom-[9rem]"
                initial={{ rotateZ: "-15deg", translateX: "-100%" }}
                whileInView={{ translateX: "0" }}>
                <TagEmoji>
                  <Emoji>🏠</Emoji>
                  <TagTitle>Vida na Europa</TagTitle>
                </TagEmoji>
              </motion.div>
              {/* icon viagens*/}
              <motion.div
                className="_viagens inline-block relative bottom-[2.5rem]"
                initial={{ rotateZ: "-15deg", translateX: "-100%" }}
                whileInView={{ translateX: "0" }}>
                <TagEmoji>
                  <Emoji>✈️</Emoji>
                  <TagTitle>Viagens Low Cost</TagTitle>
                </TagEmoji>
              </motion.div>
              {/* icon bike */}
              <motion.div
                className="_bike inline-block relative bottom-[-2rem]"
                initial={{ rotateZ: "-15deg", translateX: "-100%" }}
                whileInView={{ translateX: "0" }}>
                <TagEmoji>
                  <Emoji>🔧</Emoji>
                  <TagTitle>Manutenção Bike</TagTitle>
                </TagEmoji>
              </motion.div>
            </div>
            <div className="flex flex-col items-end">
              {/* icon comida */}
              <motion.div
                className="_comida inline-block absolute bottom-[13rem] right-0"
                initial={{ rotateZ: "5deg", translateX: "100%" }}
                whileInView={{ translateX: "0" }}>
                <TagEmoji>
                  <Emoji>🍕</Emoji>
                  <TagTitle>Comida na Itália</TagTitle>
                </TagEmoji>
              </motion.div>
              {/* icon passeios */}
              <motion.div
                className="_passeios inline-block absolute bottom-[5.5rem] right-0"
                initial={{ rotateZ: "5deg", translateX: "-100%" }}
                whileInView={{ translateX: "0" }}>
                <TagEmoji>
                  <Emoji>🚵</Emoji>
                  <TagTitle>Passeios de Bicicleta</TagTitle>
                </TagEmoji>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <SliderSuperCheap title={"SUPER CHEAP!"} />
    </section>
  );
};
