import Link from "next/link";

export  const Footer = () => {
    return (
        <footer className="bg-[#F5F2E8] pt-16 pb-8 rounded-t-[20px]" id="contato">
            <div className="container max-w-7xl">
                <div className="flex flex-col gap-8 items-center pb-16 border-b border-black">
                    <h4 className="text-center max-w-[24ch]">Quer escrever pra gente ou propor um projeto?</h4>
                    <Link className="btn" href='mailto:boraprorole@gmail.com' target="_blank">
                        É só fazer click e mandar um email!
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between pt-6">
                    <Link className="text-[14px]"  href="https://www.youtube.com/@BoraproRol%C3%AA_cj">@2024 BORAPROROLÊ</Link>
                    <Link className="text-[14px]" href="href">Developed by</Link>
                </div>
            </div>
        </footer>
    )
}

