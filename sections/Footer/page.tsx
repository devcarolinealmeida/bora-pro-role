import Link from "next/link";

export  const Footer = () => {
    return (
        <footer className="bg-[#F5F2E8] pt-16 pb-8 rounded-t-[20px]" id="contatti">
            <div className="container max-w-7xl">
                <div className="flex flex-col gap-8 items-center pb-16 border-b border-black">
                    <h4 className="text-center max-w-[24ch]">Vuoi scriverci o vuoi un progetto con noi?</h4>
                    <button className="btn">
                        Scrivici una email
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-2 items-center md:justify-between pt-6">
                    <Link className="text-[14px]" href="href">@2024 BORAPROROLÊ</Link>
                    <Link className="text-[14px]" href="href">Developed by</Link>
                </div>
            </div>
        </footer>
    )
}

