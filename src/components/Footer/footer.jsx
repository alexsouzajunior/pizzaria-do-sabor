import iconeLogo from '../../assets/images/logos/pizza-icone.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <footer className=" p-14 bg-[#08744b]">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-full">
                        <div className="flex justify-between items-center gap-4 max-md:items-center max-sm:flex-col">
                            <div className="flex flex-col items-start gap-2 text-2xl text-center mb-2 max-sm:items-center">
                                <img src={iconeLogo} alt="Logo" className="size-20 mb-2 max-sm:mx-auto" />
                                <h3 className="tracking-wider font-staatliches text-[#FAFEFC] max-sm:text-center">Pizzaria do Sabor</h3>
                                <p className='text-[#FAFEFC] text-sm'>Feita com amor para quem ama pizza.</p>
                                <div className='text-[#FAFEFC] flex gap-4 mt-3 mb-2 cursor-pointer'>
                                    <FontAwesomeIcon icon={faFacebook} className='hover:text-green-400 duration-300' />
                                    <FontAwesomeIcon icon={faInstagram} className='hover:text-green-400 duration-300' />
                                    <FontAwesomeIcon icon={faXTwitter} className='hover:text-green-400 duration-300' />
                                </div>
                            </div>
                            <div className='flex flex-row gap-28 mr-28 max-lg:mr-0 max-sm:text-center'>
                                <div className='flex flex-col gap-3'>
                                    <h3 className='text-[#FAFEFC] mb-1'>Links</h3>
                                    <a href='/' className='text-[#FAFEFC] relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#FAFEFC] before:origin-right before:scale-0 before:duration-300 before:transition-transform hover:before:scale-100 hover:before:origin-left'>Início</a>
                                    <a href='#sobre' className='text-[#FAFEFC] relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#FAFEFC] before:origin-right before:scale-0 before:duration-300 before:transition-transform hover:before:scale-100 hover:before:origin-left'>Sobre</a>
                                    <a href='#contatos' className='text-[#FAFEFC] relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#FAFEFC] before:origin-right before:scale-0 before:duration-300 before:transition-transform hover:before:scale-100 hover:before:origin-left'>Contatos</a>
                                    <a href='#avaliacoes' className='text-[#FAFEFC] relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#FAFEFC] before:origin-right before:scale-0 before:duration-300 before:transition-transform hover:before:scale-100 hover:before:origin-left'>Avaliações</a>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <h3 className='text-[#FAFEFC] mb-1'>Menu</h3>
                                    <a href='/cardapio' className='text-[#FAFEFC] relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#FAFEFC] before:origin-right before:scale-0 before:duration-300 before:transition-transform hover:before:scale-100 hover:before:origin-left'>Cardapio</a>
                                    <a href='#combos' className='text-[#FAFEFC] relative before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-[#FAFEFC] before:origin-right before:scale-0 before:duration-300 before:transition-transform hover:before:scale-100 hover:before:origin-left'>Combos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left max-sm:mt-8">
                        <h3 className="text-sm text-[#FAFEFC] max-sm:text-center">&copy; 2026 Pizzaria do Sabor - Desenvolvido por Alexsandro</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;