import { SliderSuperCheap } from "../../components/SliderSuperCheap";
import { TagEmoji, TagTitle, Emoji } from "../../components/TagEmoji";
import CamiEjoao from "../../public/bora_pro_role-joao-e-cami-8.svg";

export const PorqueNosSeguir = () => {
  return (
    <section className="bg-[#FCE688]" id="porque_seguir">
      <div className="container max-w-7xl">
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
        <div>
          <CamiEjoao className="w-80"/>
          <TagEmoji>
            <Emoji>🏠</Emoji>
            <TagTitle>Vida na Europa</TagTitle>
          </TagEmoji>
          <TagEmoji>
            <Emoji>🍕</Emoji>
            <TagTitle>Comida na Itália</TagTitle>
          </TagEmoji>
          <TagEmoji>
            <Emoji>✈️</Emoji>
            <TagTitle>Viagens Low Cost</TagTitle>
          </TagEmoji>
          <TagEmoji>
            <Emoji>🚵</Emoji>
            <TagTitle>Passeios de Bicicleta</TagTitle>
          </TagEmoji>
          <TagEmoji>
            <Emoji>🔧</Emoji>
            <TagTitle>Manutenção Bike</TagTitle>
          </TagEmoji>
        </div>
      </div>
      <SliderSuperCheap title={'SUPER CHEAP!'}/>
    </section>
  );
};
