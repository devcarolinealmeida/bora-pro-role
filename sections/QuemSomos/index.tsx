"use client";
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
import { useRef } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

import StarIcon from "../../public/Icon-star-black.svg";
import { WordsPullUp } from "../../components/words-pull-ul";

export const QuemSomos = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 40vh", "end end"],
  });
  const yRange = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 200, damping: 90 });

  /* useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]); */

  return (
    <section ref={container}
      className="bg-black relative overflow-y-clip"
      id="quem_somos">
      <div  className="absolute top-[50%] md:top-[25vh] left-0 w-full">
        {
          <svg viewBox="0 0 1920 935" fill="none">
            <motion.path
              fill="none"
              strokeWidth="113"
              stroke="#B1ABF4"
              strokeDasharray="0 1"
              d="M1955 736.671C1732.23 596.999 1533.52 721.56 1464.38 798.648C1261.74 1024.57 1082.98 724.869 1305.75 440.135C1406.85 291.63 1300.77 -25.4319 746.12 440.135C373.624 752.804 572.356 -54.8588 164.583 70.2945C-77.8228 144.693 -235.721 399.269 -288 481.001"
              style={{
                pathLength,
                scaleY: -1, // Reverse direction of line animation
              }}
            />
          </svg>
        }
      </div>
      <div className="container relative z-10">
        <div>
          <div className="pb-12">
            <h4 className="text-white mb-10">
              <WordsPullUp text="Quem somos" />
            </h4>
            <p className="text-white md:max-w-[56ch] mb-8">
              Somos Camila e João, um casal que vive em Turim, na Itália. Aqui
              mostramos nossas vidas de estudante, viagens, pedais, fatos e
              curiosidades que encontramos na Itália e, futuramente, pelo mundo
              todo. E aí, bora pro rolê?
            </p>
          </div>
          <div className="flex flex-col gap-4 gap-y-32">
            <CardQuemSomos className="">
              <div className="flex-1">
                {/* <CardTopTitle>Bio</CardTopTitle> */}
                <CardTitle>Camila "Cami"</CardTitle>
                <CardDescription>
                  Moro na Itália há 4 anos, e estou sempre à procura de algo
                  novo que eu goste de fazer, estudar ou praticar.
                </CardDescription>
                <CardContent>
                  <CardLi>
                    <StarIcon className="w-5 h-5" />
                    Carismática
                  </CardLi>
                  <CardLi>
                    <StarIcon className="w-5 h-5" />
                    Extrovertida{" "}
                  </CardLi>
                  <CardLi>
                    <StarIcon className="w-5 h-5" />
                    Paciente
                  </CardLi>
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
                  <CardLi>
                    <StarIcon className="w-5 h-5" />
                    Audaz
                  </CardLi>
                  <CardLi>
                    {" "}
                    <StarIcon className="w-5 h-5" />
                    Persistente
                  </CardLi>
                  <CardLi>
                    <StarIcon className="w-5 h-5" />
                    Paciente
                  </CardLi>
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
