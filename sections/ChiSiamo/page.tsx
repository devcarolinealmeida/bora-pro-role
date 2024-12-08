import {
  CardChiSiamo,
  CardTopTitle,
  CardTitle,
  CardDescription,
  CardContent,
  CardImg,
} from "../../components/CardChiSiamo";
import CamiSvg from "../../assets/camila.svg";
import JoaoSvg from "../../assets/joao.svg";

export const ChiSiamo = () => {
  return (
    <section className="bg-black" id="chi_siamo">
      <div className="container max-w-7xl">
        <div className="pb-12">
          <h4 className="text-white mb-4">Chi Siamo</h4>
          <p className="text-white">
            Siamo Cami e João e lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <CardChiSiamo>
            <div className="flex-1">
              <CardTopTitle>Short Bio</CardTopTitle>
              <CardTitle>Camila "Cami"</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardDescription>
              <CardContent>Aggettivo 1 Aggettivo 2 Aggettivo 3</CardContent>
            </div>
            <CardImg>
              <CamiSvg />
            </CardImg>
          </CardChiSiamo>
          <CardChiSiamo>
            <div className="flex-1">
              <CardTopTitle>Short Bio</CardTopTitle>
              <CardTitle>João</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardDescription>
              <CardContent>Aggettivo 1 Aggettivo 2 Aggettivo 3</CardContent>
            </div>
            <CardImg>
              <JoaoSvg />
            </CardImg>
          </CardChiSiamo>
        </div>
      </div>
    </section>
  );
};
