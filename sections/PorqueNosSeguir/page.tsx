"use client";
import { SliderSuperCheap } from "../../components/SliderSuperCheap";
import { TagEmoji, TagTitle, Emoji } from "../../components/TagEmoji";
import CamiEjoao from "../../public/bora_pro_role-joao-e-cami-8.svg";
import { motion } from "framer-motion";

export const PorqueNosSeguir = () => {
  return (
    <section className="bg-[#FCE688]" id="porque_seguir">
      <div className="container max-w-7xl min-h-svh">
        <div className="">
          <motion.h4 
          initial={{ opacity: 0, }}
          whileInView={{opacity: 1, }}
          className="mb-4">Porque nos seguir</motion.h4>
          <motion.p className="mb-8 md:max-w-[76ch]"
              initial={{ opacity: 0, translateY: '100px'}}
              whileInView={{opacity: 1, translateY: '0'}}>
            Te mostramos como é a vida de verdade na Europa, com seus altos e
            baixos, do ponto de vista de dois estudantes que, literalmente,
            tiveram que aprender do zero como é viver no exterior. Tá achando
            pouco? Vamos te mostrar também nossos passeios de bicicleta, viagens
            longas e curtas, compartilhando informações que poderão ser
            importantes nas suas próximas viagens.
          </motion.p>
        </div>
        <div className="relative flex flex-col max-w-xl mx-auto">
          <motion.div
          className="inline-flex justify-center w-full"
          initial={{ opacity: 0, translateY: '100px'}}
          whileInView={{ opacity: 1, translateY: '0',}}>
            <CamiEjoao className="max-w-[20rem]" />
          </motion.div>
          {/* icon 1 */}
          <motion.div
            className="inline-block absolute top-1/2 left-0"
            initial={{ rotateZ: "-15deg", translateX: "-100%" }}
            whileInView={{ translateX: "0" }}>
            <TagEmoji>
              <Emoji>🏠</Emoji>
              <TagTitle>Vida na Europa</TagTitle>
            </TagEmoji>
          </motion.div>
          {/* icon 2 */}
          <motion.div
            className="inline-block absolute top-[90%] md:top-[60%] right-0"
            initial={{ rotateZ: "5deg", translateX: "100%" }}
            whileInView={{ translateX: "0" }}>
            <TagEmoji>
              <Emoji>🍕</Emoji>
              <TagTitle>Comida na Itália</TagTitle>
            </TagEmoji>
          </motion.div>
          {/* icon 3 */}
          <motion.div
            className="inline-block absolute bottom-[3rem] left-0"
            initial={{ rotateZ: "-15deg", translateX: "-100%" }}
            whileInView={{ translateX: "0" }}>
            <TagEmoji>
              <Emoji>✈️</Emoji>
              <TagTitle>Viagens Low Cost</TagTitle>
            </TagEmoji>
          </motion.div>
          {/* icon 4 */}
          <motion.div
            className="inline-block absolute bottom-[-5rem] md:top-[95%] right-0"
            initial={{ rotateZ: "5deg", translateX: "-100%" }}
            whileInView={{ translateX: "0" }}>
            <TagEmoji>
              <Emoji>🚵</Emoji>
              <TagTitle>Passeios de Bicicleta</TagTitle>
            </TagEmoji>
          </motion.div>
          {/* icon 5 */}
          <motion.div
            className="inline-block absolute -bottom-40 md:-bottom-12 left-0"
            initial={{ rotateZ: "-15deg", translateX: "-100%" }}
            whileInView={{ translateX: "0" }}>
            <TagEmoji>
              <Emoji>🔧</Emoji>
              <TagTitle>Manutenção Bike</TagTitle>
            </TagEmoji>
          </motion.div>
        </div>
      </div>
      <SliderSuperCheap title={"SUPER CHEAP!"} />
    </section>
  );
};
