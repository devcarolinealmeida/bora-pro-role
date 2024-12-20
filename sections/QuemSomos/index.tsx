import {
  CardQuemSomos,
  CardTopTitle,
  CardTitle,
  CardDescription,
  CardContent,
  CardLi,
  CardImg,
} from "../../components/CardQuemSomos";
import CamiSvg from "../../public/camila.svg";
import JoaoSvg from "../../public/joao.svg";
import SvgBg from "../../public/svg-sfondo-purple.svg";
import StarIcon from "../../public/Icon-star-black.svg";

export const QuemSomos = () => {
  return (
    <section className="bg-black relative overflow-y-clip" id="quem_somos">
      {/* <SvgBg className="absolute z-0 bottom-0" /> */}
      <div className="container max-w-7xl relative z-10">
        <div>
          <div className="pb-12">
            <h4 className="text-white mb-10">Quem somos</h4>
            <p className="text-white md:max-w-[76ch] mb-8">
              Somos Camila e João, um casal que vive em Turim, na Itália. Aqui
              mostramos nossas vidas de estudante, viagens, pedais, fatos e
              curiosidades que encontramos na Itália e, futuramente, pelo mundo
              todo. E aí, bora pro rolê?
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <CardQuemSomos className="">
              <div className="flex-1">
                {/* <CardTopTitle>Bio</CardTopTitle> */}
                <CardTitle>Camila "Cami"</CardTitle>
                <CardDescription>
                  Moro na Itália há 4 anos, e estou sempre à procura de algo
                  novo que eu goste de fazer, estudar ou praticar.
                </CardDescription>
                <CardContent>
                  <CardLi><StarIcon className="w-5 h-5"/>Carismática</CardLi>
                  <CardLi><StarIcon className="w-5 h-5"/>Extrovertida </CardLi>
                  <CardLi><StarIcon className="w-5 h-5"/>Paciente</CardLi>
                </CardContent>
              </div>
              <CardImg>
                <CamiSvg className="w-24" />
              </CardImg>
            </CardQuemSomos>
            <CardQuemSomos className="md:self-end">
              <div className="flex-1">
                {/* <CardTopTitle>Bio</CardTopTitle> */}
                <CardTitle>João</CardTitle>
                <CardDescription>
                  Estou na Itália há dois anos, meu rolê é explorar, me
                  aventurar e ter sempre experiências novas. Medo pra mim é
                  sinônimo de diversão
                </CardDescription>
                <CardContent>
                  <CardLi><StarIcon className="w-5 h-5"/>Audaz</CardLi>
                  <CardLi> <StarIcon className="w-5 h-5"/>Persistente</CardLi>
                  <CardLi><StarIcon className="w-5 h-5"/>Paciente</CardLi>
                </CardContent>
              </div>
              <CardImg>
                <JoaoSvg className="w-32" />
              </CardImg>
            </CardQuemSomos>
          </div>
        </div>
      </div>
    </section>
  );
};
