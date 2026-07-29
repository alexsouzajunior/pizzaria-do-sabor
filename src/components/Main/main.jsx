import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faClock, faPizzaSlice, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './main.css'

import imagemPizza from '../../assets/images/main/pizza-no-prato-na-mesa.jpg'

import imageSectionAbout from '../../assets/images/about/vista-superior-da-pizza.jpg'

// Imagens das pizzas nos cards quando passar o mouse
import imageCardPizzaCalabresa from '../../assets/images/main/cardapio-pizzas/pizza-de-calabresa.jpg'
import imageCardPizzaMussarela from '../../assets/images/main/cardapio-pizzas/pizza-de-mussarela.jpg'
import imageCardPizzaPortuguesa from '../../assets/images/main/cardapio-pizzas/pizza-portuguesa.jpg'
import imageCardPizzaFrangoComCatupiry from '../../assets/images/main/cardapio-pizzas/pizza-de-frango-com-catupiry.jpg'
import imageCardPizzaNapolitana from '../../assets/images/main/cardapio-pizzas/pizza-napolitana.jpg'
import imageCardPizzaPepperoni from '../../assets/images/main/cardapio-pizzas/pizza-pepperoni.jpg'

// Imagem do banner e do container de infomação sobre a pizza
import imageBackgroundSection from '../../assets/images/main/pizza-com-tomate-e-manjericao.png'
import imageBackgroundSectionCTA from '../../assets/images/main/pizza-inclinada.png'

// Importando os arquivos para o uso do componente
import CombosPizzas from '../Combos-pizzas/combos-pizzas'
import Testimonials from '../testimonials/testimonials'
import BackToTop from '../back-to-top/back-to-top';

function Main() {

    return (
        <>
        <main>
            <div className='hero-content'>
                <div className='flex justify-around items-center gap-4 w-full px-4 relative top-1/2 -translate-y-1/2 mx-auto max-lg:justify-center max-lg:flex-wrap max-[320px]:px-0'>
                    <div className="flex items-center flex-col px-4 z-10 max-lg:relative max-sm:max-w-full max-sm:px-2 max-[375px]:pt-14 max-[320px]:px-2 max-[320px]:pt-20">
                        <h2 className="title-slide text-7xl text-white text-balance text-center font-italianno max-lg:text-center max-lg:w-full max-lg:max-w-5xl max-md:mb-1 max-sm:text-center max-sm:text-4xl">Uma seleção campeã de ingredientes. Pensada para você!</h2>
                        <p className="paragraph-slide text-white text-base text-center leading-6 max-lg:text-center max-[320px]:text-sm">Faça agora o seu pedido que chegamos aí com o que há de melhor!</p>
                        <div className='button-slide'>
                            <a href="#combos" className="bg-[#FF7B1D] border border-[#FF7B1D] h-12 px-4 flex justify-center items-center mt-7 text-white overflow-hidden w-[230px] rounded-full my-2 duration-300 hover:bg-transparent hover:text-white max-lg:relative max-sm:top-2 max-lg:mx-auto max-sm:w-full max-sm:text-center max-sm:mt-0">
                                <span>Confira os nossos combos</span>
                            </a>
                        </div>
                    </div>
                    <div className='image-slide'>
                        <img src={imagemPizza} alt="Pizza de carne de frango e pepperoni" className='img-slide' />
                    </div>
                </div>
            </div>
        </main>

        <section className='bg-[#fff]' id='sobre'>
            <div className='about-container relative flex justify-between items-center gap-4 p-4 my-4 max-w-5xl mx-auto max-[820px]:justify-center max-lg:flex-col max-[1080px]:pb-0 max-[1080px]:mt-0'>
                <div className='about-image'>
                    <img src={imageSectionAbout} alt='Imagem de uma pizza cortada' className='max-w-4xl object-cover max-sm:aspect-auto max-sm:h-[300px]' />
                </div>
                <div>
                    <h2 className='text-[3rem] max-w-full text-[#FF7B1D] font-semibold leading-tight text-balance text-left my-4 max-sm:text-4xl max-lg:text-center'>Sobre a pizzaria</h2>
                    <p className='text-base text-left text-stone-700 max-w-4xl'>Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce laoreet tortor praesent; volutpat vulputate aenean. Litora ullamcorper habitasse senectus metus at. Dui tincidunt facilisis at accumsan litora interdum.</p>
                </div>
            </div>
        </section>

        <section>
            <h2 className='title-services text-[#00B571] text-xl text-center'>Serviços</h2>
            <h1 className='text-slate-800 text-xl font-bold text-center text-balance'>Entregando o melhor para o nosso cliente</h1>
            <div className='flex justify-between items-center max-w-4xl mx-auto p-4 mt-12 mb-14 max-sm:flex-col max-sm:gap-4'>
                <div className='relative flex items-center flex-col gap-2 px-3 w-[480px] max-lg:items-center max-sm:w-full'>
                    <FontAwesomeIcon icon={faPizzaSlice} className='text-4xl text-[#00B571] bg-[#FAFEFC] p-2 rounded-lg' />
                    <h1 className='text-lg text-slate-800 text-center font-bold'>Melhores Ingredientes selecionados</h1>
                    <h1 className='text-stone-500 w-full text-balance text-center max-lg:text-center'>Ingredientes de alta qualidade para entregar a melhor pizza para você</h1>
                </div>
                <div className='relative flex items-center flex-col gap-2 px-3 w-[480px] max-lg:items-center max-sm:w-full'>
                    <FontAwesomeIcon icon={faThumbsUp} className='text-3xl text-[#00B571] bg-[#FAFEFC] p-2 rounded-lg' />
                    <h1 className='text-lg text-slate-800 text-center font-bold'>Atendimento exelente</h1>
                    <h1 className='text-stone-500 w-full text-balance text-center'>Atendimento ao cliente de qualidade</h1>
                </div>
            </div>
        </section>
        
        <section className='pt-10 pb-10 max-w-7xl mx-auto max-lg:pb-14'>
            <div className='px-4'>
                <h2 className='text-[#FF7B1D] text-center text-balance text-3xl uppercase mb-2'>A qualidade e o sabor que faz cada fatia de <span className='font-bold'>pizza saborosa</span></h2>
                <p className='text-[#474747] text-center text-lg'>Veja as nossas pizzas tradicionais</p>
            </div>
            <div className='relative flex justify-center flex-wrap gap-4 p-4 pt-10 mx-auto'>
                    <div className='card-item-pizzas bg-white shadow-md w-72 h-1/2 rounded-xl p-4 grow group overflow-hidden'>
                        <img src={imageCardPizzaCalabresa} alt="" className='absolute top-0 left-0 w-full h-full object-cover rounded-xl duration-300 group-hover:scale-110' />
                        <div className='absolute bottom-3 left-4 z-10'>
                            <h2 className='text-xl text-white'>Pizza de calabresa</h2>
                            <span className='text-base text-gray-100'>R$ 54,00</span>
                        </div>
                    </div>
                    <div className='card-item-pizzas bg-white shadow-md w-72 h-1/2 rounded-xl p-4 grow group overflow-hidden'>
                        <img src={imageCardPizzaMussarela} alt='Imagem da pizza de mussarela' className='absolute top-0 left-0 w-full h-full object-cover rounded-xl duration-300 group-hover:scale-110' />
                        <div className='absolute bottom-3 left-4 z-10'>
                            <h2 className='text-xl text-white'>Pizza de mussarela</h2>
                            <span className='text-base text-gray-100'>R$ 48,00</span>
                        </div>
                    </div>
                    <div className='card-item-pizzas bg-white shadow-md w-72 h-1/2 rounded-xl p-4 grow group overflow-hidden'>
                        <img src={imageCardPizzaPortuguesa} alt='Imagem da pizza portuguesa' className='absolute top-0 left-0 w-full h-full object-cover rounded-xl duration-300 group-hover:scale-110' />
                        <div className='absolute bottom-3 left-4 z-10'>
                            <h2 className='text-xl text-white'>Pizza portuguesa</h2>
                            <span className='text-base text-gray-100'>R$ 35,00</span>
                        </div>
                    </div>
                    <div className='card-item-pizzas bg-white shadow-md w-72 h-1/2 rounded-xl p-4 grow group overflow-hidden'>
                        <img src={imageCardPizzaFrangoComCatupiry} alt='Imagem da pizza de frango com catupiry' className='absolute top-0 left-0 w-full h-full object-cover rounded-xl duration-300 group-hover:scale-110' />
                        <div className='absolute bottom-3 left-4 z-10'>
                            <h2 className='text-xl text-white'>Pizza de frango com catupiry</h2>
                            <span className='text-base text-gray-100'>R$ 42,00</span>
                        </div>
                    </div>
                    <div className='card-item-pizzas bg-white shadow-md w-72 h-1/2 rounded-xl p-4 grow group overflow-hidden'>
                        <img src={imageCardPizzaNapolitana} alt='Imagem da pizza napolitana' className='absolute top-0 left-0 w-full h-full object-cover rounded-xl duration-300 group-hover:scale-110' />
                        <div className='absolute bottom-3 left-4 z-10'>
                            <h2 className='text-xl text-white'>Pizza napolitana</h2>
                            <span className='text-base text-gray-100'>R$ 30,00</span>
                        </div>
                    </div>
                    <div className='card-item-pizzas bg-white shadow-md w-72 h-1/2 rounded-xl p-4 grow group overflow-hidden'>
                        <img src={imageCardPizzaPepperoni} alt='Imagem da pizza pepperoni' className='absolute top-0 left-0 w-full h-full object-cover rounded-xl duration-300 group-hover:scale-110' />
                        <div className='absolute bottom-3 left-4 z-10'>
                            <h2 className='text-xl text-white'>Pizza de pepperoni</h2>
                            <span className='text-base text-gray-100'>R$ 32,00</span>
                        </div>
                    </div>
                </div>
        </section>

        <section>
            <div className='relative max-w-full h-80 mx-auto before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/55 before:rounded-xl 2xl:max-w-7xl'>
                <img src={imageBackgroundSection} alt='' className='absolute top-0 left-0 w-full h-full object-cover rounded-xl -z-10 max-2xl:rounded-none' />
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full flex flex-col items-center'>
                    <h2 className='text-white text-[5rem] mb-5 text-center leading-[4.3rem] font-italianno max-sm:text-[4rem]'>Cada fatia é um sabor de qualidade.</h2>
                    <p className='text-white text-base text-center relative bottom-4'>Com os ingredientes selecionados e qualidade, prontos para servir ate você</p>
                </div>
            </div>
        </section>

        <section className='max-sm:px-4 py-14 px-4 relative max-w-7xl mx-auto max-[1140px]:max-w-4xl'>
            <h2 className='text-center text-[#00B571] text-4xl font-staatliches tracking-wide mb-3 relative before:content-[""] before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:w-40 before:h-[3px] before:bg-[#00B571] max-sm:text-3xl'>Confira os combos do cardapio</h2>
        </section>

        <div id='combos'>
            <CombosPizzas />
        </div>

        <section className='sectionCTA mx-auto py-20 px-8'>
            <div className='relative flex justify-between items-center max-w-7xl mx-auto p-4 max-lg:flex-col max-lg:justify-center'>
                <div className='flex flex-col items-start max-w-[31rem] max-lg:max-w-3xl max-lg:items-center max-sm:max-w-full max-sm:-translate-y-10'>
                    <h1 className='text-5xl font-staatliches uppercase text-[#00B571] text-left leading-[50px] mb-3 max-w-[41rem] max-lg:text-center max-lg:mb-5 max-lg:text-4xl max-lg:max-w-none max-sm:text-3xl'>Experimente a pizza que vai te conquistar de primeira!</h1>
                    <p className='text-slate-500 text-base text-left max-lg:text-center max-sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href='/cardapio' className='flex justify-center border border-[#00B571] bg-[#00B571] text-white py-3 rounded-full w-[230px] mt-4 duration-300 hover:bg-transparent hover:text-[#00B571]'>Veja o nosso cardapio</a>
                </div>
                
                <img src={imageBackgroundSectionCTA} alt="Imagem da pizza de calabresa" className='relative bottom-12 w-[570px] object-cover rounded-xl max-lg:bottom-0 max-sm:w-full' />        
            </div>
        </section>

        <Testimonials />

        <section className='p-4' id='contatos'>
            <h1 className='text-center text-4xl text-[#FF7B1D] font-semibold mb-4'>Contatos da pizzaria</h1>
            <div className='grid grid-cols-2 place-items-start gap-4 max-w-7xl mx-auto p-4 px-4 max-lg:grid-cols-1 max-lg:place-items-center'>
                    <div>
                        <iframe className='max-w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6570.559469462371!2d-44.2993731607522!3d-2.529159370412643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1777221288514!5m2!1spt-BR!2sbr" title='Location - Google Maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='grid p-4 max-lg:grid-cols-3 max-lg:place-items-center max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-start'>
                        <div className='flex items-center gap-4 mb-4 max-lg:flex-col max-md:flex-row max-md:w-full'>
                            <FontAwesomeIcon icon={faLocationDot} className='text-xl text-[#FF700A]' />
                            <div>
                                <h1 className='font-semibold text-lg max-lg:text-center max-md:text-left'>Localização da pizzaria</h1>
                                <p className='max-lg:text-center max-md:text-left'>Rua 01, Avenida 01, Bairro da alegria, Brasil</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mb-4 max-lg:flex-col max-md:flex-row max-md:w-full'>
                            <FontAwesomeIcon icon={faPhone} className='text-xl text-[#FF700A]' />
                            <div>
                                <h1 className='font-semibold text-lg max-lg:text-center max-md:text-left'>Numero de telefone</h1>
                                <p className='max-lg:text-center max-md:text-left'>(00) 0000-0000</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mb-4 max-lg:flex-col max-md:flex-row max-md:w-full'>
                            <FontAwesomeIcon icon={faClock} className='text-xl text-[#FF700A]' />
                            <div>
                                <h1 className='font-semibold text-lg max-lg:text-center max-md:text-left'>Horários de atendimento</h1>
                                <div className='flex flex-col'>
                                    <p className='text-balance'>Segunda - Sexta 10:00 - 16:00</p>
                                    <p className='text-balance'>Sabado e domingo 19:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        
        <BackToTop />
        </>
    )
}

export default Main;