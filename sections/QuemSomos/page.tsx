import {
  CardQuemSomos,
  CardTopTitle,
  CardTitle,
  CardDescription,
  CardContent,
  CardImg,
} from "../../components/CardQuemSomos";
import CamiSvg from "../../assets/camila.svg";
import JoaoSvg from "../../assets/joao.svg";

export const QuemSomos = () => {
  return (
    <section className="bg-black" id="quem_somos">
      <div className="container max-w-7xl">
        <div className="pb-12">
          <h4 className="text-white mb-4">Quem somos</h4>
          <p className="text-white">
            Somos Camila e João, um casal que vive em Turim, na Itália. Aqui
            mostramos nossas vidas de estudante, viagens, pedais, fatos e
            curiosidades que encontramos na Itália e, futuramente, pelo mundo
            todo. E aí, bora pro rolê?
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <CardQuemSomos>
            <div className="flex-1">
              <CardTopTitle>Bio</CardTopTitle>
              <CardTitle>Camila "Cami"</CardTitle>
              <CardDescription>
              Moro na Itália há 4 anos, e estou sempre à procura de algo novo que eu goste de fazer, estudar ou praticar. 
              </CardDescription>
              <CardContent>carismática extrovertida paciente</CardContent>
            </div>
            <CardImg>
              <CamiSvg />
            </CardImg>
          </CardQuemSomos>
          <CardQuemSomos>
            <div className="flex-1">
              <CardTopTitle>Bio</CardTopTitle>
              <CardTitle>João</CardTitle>
              <CardDescription>
              Estou na Itália há dois anos, meu rolê é explorar, me aventurar e ter sempre experiências novas. Medo pra mim é sinônimo de diversão 
              </CardDescription>
              <CardContent>Audaz persistente paciente</CardContent>
            </div>
            <CardImg>
              <JoaoSvg />
            </CardImg>
          </CardQuemSomos>
        </div>
      </div>
    </section>
  );
};
