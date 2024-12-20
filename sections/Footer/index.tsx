import Link from "next/link";

export  const Footer = () => {
    return (
        <footer className="bg-[#F5F2E8] pt-16 pb-8 rounded-t-[20px]" id="contato">
            <div className="container max-w-7xl">
                <div className="flex flex-col gap-8 items-center pb-16 border-b border-black">
                    <h4 className="text-center max-w-[24ch]">Quer escrever pra gente ou propor um projeto?</h4>
                    <Link 
                    role="button" aria-label="Click para mandar um email"
                    className="btn-pulse" href='mailto:camilaejoao1706@gmail.com' target="_blank">
                        <span>Mandar um email!</span>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between pt-6">
                    <Link
                     className="text-[14px] hover:text-orange-500 transition-colors"  href="https://www.youtube.com/@BoraproRol%C3%AA_cj">@2024 BORAPROROLÊ</Link>
                    <div className="inline-block text-xs text-center">
                        <span className="block md:inline">Designed by <Link className="underline hover:text-orange-500 transition-colors" href="https://anna-bigaran-portfolio.webflow.io/" target="_blank">Anna Bigaran</Link></span> <span className="hidden md:inline"> | </span>
                        <span className="block md:inline">Developed by <Link className="underline hover:text-orange-500 transition-colors" href="https://caroline-almeida-dev.vercel.app/" target="_blank">Caroline Almeida</Link></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

