import { Tabs } from '@base-ui/react'
import { HugeiconsIcon } from '@hugeicons/react';
import { Pizza01Icon, NoodlesIcon, SodaCanIcon } from '@hugeicons/core-free-icons';
import 'swiper/css'
import 'swiper/css/navigation'
import heroVideo from '../images/cardapio/videos/video-pizza.mp4'
import imagePizzaCalabresa from '.././images/cardapio/pizzas/pizza-de-calabresa.png'
import imagePizzaMussarela from '.././images/cardapio/pizzas/pizza-de-mussarela.png'
import imagePizzaPortuguesa from '.././images/cardapio/pizzas/pizza-portuguesa.png'
import imagePizzaFrangoComCatupiry from '.././images/cardapio/pizzas/pizza-de-frango-com-catupiry.png'
import imagePizzaPepperoni from '.././images/cardapio/pizzas/pizza-pepperoni.png'
import imagePizzaNapolitana from '.././images/cardapio/pizzas/pizza-napolitana.png'
import pizzaBrocolisComCatupiry from '.././images/cardapio/pizzas/pizzas-veganas/pizza-de-brocolis-com-catupiry.png'
import pizzaMargherita from '.././images/cardapio/pizzas/pizzas-veganas/pizza-margherita.png'
import pizzaCaponata from '.././images/cardapio/pizzas/pizzas-veganas/pizza-caponata.jpg'

import pizzaBananaComCanela from '.././images/cardapio/pizzas/pizzas-doces/pizza-banana-com-canela.png'
import pizzaChocolateComMorango from '.././images/cardapio/pizzas/pizzas-doces/pizza-chocolate-com-morango.png'
import pizzaRomeuEJulieta from '.././images/cardapio/pizzas/pizzas-doces/pizza-romeu-e-julieta.png'

import espagueteABolonhesa from '.././images/cardapio/massas/esparguete-a-bolonhesa.jpg'
import espagueteComCamarão from '.././images/cardapio/massas/espaguete-com-camarao.jpg'
import espagueteComMolhoBranco from '.././images/cardapio/massas/espaguete-com-molho-branco.jpg'

import coca_cola_1L from '.././images/cardapio/bebidas/coca-cola-1l.png'
import coca_cola_1L_zero from '.././images/cardapio/bebidas/coca-cola-1l-zero.png'
import fanta_1L from '.././images/cardapio/bebidas/fanta-1l.png'
import fanta_2L from '.././images/cardapio/bebidas/fanta-2l.png'
import coca_cola_lata from '.././images/cardapio/bebidas/coca-cola-lata-350ml.webp'
import coca_cola_lata_zero from '.././images/cardapio/bebidas/coca-cola-lata-zero-350ml.png'
import BackToTop from '../../back-to-top/back-to-top'


import './cardapio.css'

function Cardapio() {
    return (
        <>
        
        <main className="hero w-full mb-10 max-sm:mb-10">
            <div className='flex justify-between items-center flex-wrap gap-4 max-w-7xl mx-auto p-52 px-4 max-[1073px]:justify-center max-[1073px]:px-4'>
                <div className='flex flex-col relative bottom-10 z-10'>
                    <h2 className="text-4xl text-white uppercase font-bold text-left text-balance leading-normal max-[1063px]:text-center max-[1063px]:w-full max-sm:text-3xl">Ingredientes frescos, sabor inconfundível</h2>
                    <p className='text-lg text-white font-medium text-left text-balance max-[1063px]:text-center'>Servimos o melhor da pizzaria para os clientes</p>
                </div>
                <video src={heroVideo} autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover object-center'></video>
            </div>
        </main>

        <Tabs.Root defaultValue="Todos">
            <div className='list-tabs-container'>
                <Tabs.List className="list-tabs relative flex justify-start gap-4">
                    <Tabs.Tab className={"Tab"} value="Todos">
                        Todos
                    </Tabs.Tab>
                    <Tabs.Tab className={"Tab"} value="Pizzas">
                        <div className='flex justify-center items-center gap-1'>
                            <HugeiconsIcon icon={Pizza01Icon} size={32} color={"currentColor"}></HugeiconsIcon>
                            Pizzas
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab className={"Tab"} value="Massas">
                        <div className='flex justify-center items-center gap-1'>
                            <HugeiconsIcon icon={NoodlesIcon} size={32} color={"currentColor"}></HugeiconsIcon>
                            Massas
                        </div>
                    </Tabs.Tab>    
                    <Tabs.Tab className={"Tab"} value="Bebidas">
                        <div className='flex justify-center items-center gap-1'>
                            <HugeiconsIcon icon={SodaCanIcon} size={32} color={"currentColor"}></HugeiconsIcon>
                            Bebidas
                        </div>
                        </Tabs.Tab>
                {/* <Tabs.Indicator className={"Indicator"} /> */}
                </Tabs.List>
            </div>
            <Tabs.Panel className={"Painel"} value="Todos">
                <div className='max-w-screen-xl mx-auto max-xl:flex max-xl:justify-center'>
                    <h1 className='bg-[#f7fffc] w-max px-4 py-3 border border-l-4 border-y-0 border-x-0 border-[#00B571] text-[#33C48D] font-bold max-xl:w-[430px] max-xl:text-center max-xl:border-x-2 max-xl:border-y-2 max-xl:rounded-full max-xl:text-xl max-xl:mx-4'>Pizzas tradicionais</h1>
                </div>
                <div className='relative grid grid-cols-3 place-items-center max-w-screen-xl mx-auto px-4 gap-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaCalabresa} alt='Pizza de calabresa' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de calabresa</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 54,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaMussarela} alt='Pizza de mussarela' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                            <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de mussarela</h2>
                            <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 48,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaPortuguesa} alt='Pizza portuguesa' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza portuguesa</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 35,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaFrangoComCatupiry} alt='Pizza de frango com catupiry' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de frango com catupiry</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 42,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaPepperoni} alt='Pizza de pepperoni' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de pepperoni</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 32,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaNapolitana} alt='Pizza napolitana' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza napolitana</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 30,00</span>
                    </div>
                </div>
                </div>
                <div className='max-w-screen-xl mx-auto max-xl:flex max-xl:justify-center'>
                    <h1 className='bg-[#f7fffc] w-max px-4 py-3 border border-l-4 border-y-0 border-x-0 border-[#00B571] text-[#33C48D] font-bold max-xl:w-[430px] max-xl:text-center max-xl:border-x-2 max-xl:border-y-2 max-xl:rounded-full max-xl:text-xl max-xl:mx-4'>Pizzas veganas</h1>
                </div>
                <div className='relative grid grid-cols-3 place-items-center max-w-screen-xl mx-auto px-4 gap-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaBrocolisComCatupiry} alt='Pizza de brócolis com catupiry' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de brócolis com catupiry</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 21,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaMargherita} alt='Pizza de margherita' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de margherita</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 14,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-full overflow-hidden'>
                        <img src={pizzaCaponata} alt='Pizza caponata' className='w-full h-full object-cover rounded-s-xl mx-auto duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza caponata</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 17,00</span>
                    </div>
                </div>
                </div>
                <div className='max-w-screen-xl mx-auto max-xl:flex max-xl:justify-center'>
                    <h1 className='bg-[#f7fffc] w-max px-4 py-3 border border-l-4 border-y-0 border-x-0 border-[#00B571] text-[#33C48D] font-bold max-xl:w-[430px] max-xl:text-center max-xl:border-x-2 max-xl:border-y-2 max-xl:rounded-full max-xl:text-xl max-xl:mx-4'>Pizzas doces</h1>
                </div>
                <div className='relative grid grid-cols-3 place-items-center max-w-screen-xl mx-auto px-4 gap-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaBananaComCanela} alt='Pizza de banana com canela' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de banana com canela</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 15,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaRomeuEJulieta} alt='Pizza de romeu e julieta' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de romeu e julieta</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 23,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaChocolateComMorango} alt='Pizza de chocolate com morango' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de chocolate com morango</h2>
                            <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 21,00</span>
                        </div>
                </div>
            </div>
                <div className='relative grid grid-cols-3 place-items-center gap-4 max-w-screen-xl mx-auto px-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='card-content w-[340px] h-auto flex items-center flex-col group shadow-md rounded-lg duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='card-categoria-massas'>
                        <img src={espagueteABolonhesa} alt='Espaguete a bolonhesa' className='card-image' />
                    </div>
                    <div className='p-2 w-full h-full flex flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-balance duration-300 group-hover:text-white'>Espaguete a bolonhesa</h2>
                        <h3 className='text-sm text-slate-500 mb-3 text-balance duration-300 max-[400px]:w-full mx-auto group-hover:text-white'>Massa italiana, molho bolonhesa, parmesão, azeite e manjerição</h3>
                        <span className='text-base text-slate-700 duration-300 group-hover:text-white'>R$ 21,00</span>
                    </div>
                </div>
                <div className='card-content w-[340px] h-auto flex items-center flex-col group shadow-md rounded-lg duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='card-categoria-massas'>
                        <img src={espagueteComCamarão} alt='Espaguete com camarão' className='card-image' />
                    </div>
                    <div className='p-2 w-full h-full flex flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-balance duration-300 group-hover:text-white'>Espaguete com camarão</h2>
                        <h3 className='text-sm text-slate-500 mb-3 text-balance max-[400px]:w-full mx-auto duration-300 group-hover:text-white'>Massa italiana, molho de tomate, camarão, azeite, cebola e manjerição</h3>
                        <span className='text-base text-slate-700 duration-300 group-hover:text-white'>R$ 35,00</span>
                    </div>
                </div>
                <div className='card-content w-[340px] h-auto flex items-center flex-col group shadow-md rounded-lg duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='card-categoria-massas'>
                        <img src={espagueteComMolhoBranco} alt='Espaguete com molho branco' className='card-image' />
                    </div>
                    <div className='p-2 w-full h-full flex flex-col ml-2'>
                        <h2 className='text-xl text-slate-7 00 mb-1 text-balance duration-300 group-hover:text-white'>Espaguete com molho branco</h2>
                        <h3 className='text-sm text-slate-500 mb-3 text-balance max-[400px]:w-full mx-auto duration-300 group-hover:text-white'>Massa italiana, molho de tomate, camarão, azeite, cebola e manjerição</h3>
                        <span className='text-base text-slate-800 duration-300 group-hover:text-white'>R$ 32,00</span>
                    </div>
                </div>
            </div>
                <div className='relative grid grid-cols-3 place-items-center gap-4 max-w-screen-xl mx-auto px-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_1L} alt='Coca cola 1 litro' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola 1L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 4,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_1L_zero} alt='Coca cola zero 1 litro' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola zero 1L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 5,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={fanta_1L} alt='Fanta 1 litro' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Fanta 1L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 7,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={fanta_2L} alt='Fanta 2 litros' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Fanta 2L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 9,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_lata} alt='Coca cola lata' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola lata 350ml</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 4,50</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_lata_zero} alt='Coca cola lata zero' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola lata zero 350ml</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 8,00</span>
                    </div>
                </div>
            </div>
            </Tabs.Panel>
            <Tabs.Panel className={"Painel"} value="Pizzas">
                <div className='max-w-screen-xl mx-auto max-xl:flex max-xl:justify-center'>
                    <h1 className='bg-[#f7fffc] w-max px-4 py-3 border border-l-4 border-y-0 border-x-0 border-[#00B571] text-[#33C48D] font-bold max-xl:w-[430px] max-xl:text-center max-xl:border-x-2 max-xl:border-y-2 max-xl:rounded-full max-xl:text-xl max-xl:mx-4'>Pizzas tradicionais</h1>
                </div>
                <div className='relative grid grid-cols-3 place-items-center max-w-screen-xl mx-auto px-4 gap-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaCalabresa} alt='Pizza de calabresa' className='size-52 object-cover  mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de calabresa</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 54,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaMussarela} alt='Pizza de mussarela' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                            <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de mussarela</h2>
                            <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 48,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaPortuguesa} alt='Pizza portuguesa' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza portuguesa</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 35,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaFrangoComCatupiry} alt='Pizza de frango com catupiry' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de frango com catupiry</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 42,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaPepperoni} alt='Pizza de pepperoni' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de pepperoni</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 32,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={imagePizzaNapolitana} alt='Pizza napolitana' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza napolitana</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 30,00</span>
                    </div>
                </div>
                </div>
                <div className='max-w-screen-xl mx-auto max-xl:flex max-xl:justify-center'>
                    <h1 className='bg-[#f7fffc] w-max px-4 py-3 border border-l-4 border-y-0 border-x-0 border-[#00B571] text-[#33C48D] font-bold max-xl:w-[430px] max-xl:text-center max-xl:border-x-2 max-xl:border-y-2 max-xl:rounded-full max-xl:text-xl max-xl:mx-4'>Pizzas veganas</h1>
                </div>
                <div className='relative grid grid-cols-3 place-items-center max-w-screen-xl mx-auto px-4 gap-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaBrocolisComCatupiry} alt='Pizza de brócolis com catupiry' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de brócolis com catupiry</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 21,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaMargherita} alt='Pizza de margherita' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de margherita</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 14,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 overflow-hidden'>
                        <img src={pizzaCaponata} alt='Pizza caponata' className='w-80 h-32 object-cover rounded-s-xl mx-auto duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza caponata</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 17,00</span>
                    </div>
                </div>
                </div>
                <div className='max-w-screen-xl mx-auto max-xl:flex max-xl:justify-center'>
                    <h1 className='bg-[#f7fffc] w-max px-4 py-3 border border-l-4 border-y-0 border-x-0 border-[#00B571] text-[#33C48D] font-bold max-xl:w-[430px] max-xl:text-center max-xl:border-x-2 max-xl:border-y-2 max-xl:rounded-full max-xl:text-xl max-xl:mx-4'>Pizzas doces</h1>
                </div>
                <div className='relative grid grid-cols-3 place-items-center max-w-screen-xl mx-auto px-4 gap-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaBananaComCanela} alt='Pizza de banana com canela' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de banana com canela</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 15,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaRomeuEJulieta} alt='Pizza de romeu e julieta' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de romeu e julieta</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 23,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl shadow-md duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={pizzaChocolateComMorango} alt='Pizza de chocolate com morango' className='size-52 object-cover mx-auto rounded-full duration-500 group-hover:scale-105 max-md:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-center text-balance duration-500 group-hover:text-white'>Pizza de chocolate com morango</h2>
                            <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 21,00</span>
                        </div>
                </div>
            </div>
            </Tabs.Panel>
            <Tabs.Panel className={"Painel"} value="Massas">
                <div className='relative grid grid-cols-3 place-items-center gap-4 max-w-screen-xl mx-auto px-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='card-content w-[340px] h-auto flex items-center flex-col group shadow-md rounded-lg duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='card-categoria-massas'>
                        <img src={espagueteABolonhesa} alt='Espaguete a bolonhesa' className='card-image' />
                    </div>
                    <div className='p-2 w-full h-full flex flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-balance duration-300 group-hover:text-white'>Espaguete a bolonhesa</h2>
                        <h3 className='text-sm text-slate-500 mb-3 text-balance duration-300 max-[400px]:w-full mx-auto group-hover:text-white'>Massa italiana, molho bolonhesa, parmesão, azeite e manjerição</h3>
                        <span className='text-base text-slate-700 duration-300 group-hover:text-white'>R$ 21,00</span>
                    </div>
                </div>
                <div className='card-content w-[340px] h-auto flex items-center flex-col group shadow-md rounded-lg duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='card-categoria-massas'>
                        <img src={espagueteComCamarão} alt='Espaguete com camarão' className='card-image' />
                    </div>
                    <div className='p-2 w-full h-full flex flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-balance duration-300 group-hover:text-white'>Espaguete com camarão</h2>
                        <h3 className='text-sm text-slate-500 mb-3 text-balance max-[400px]:w-full mx-auto duration-300 group-hover:text-white'>Massa italiana, molho de tomate, camarão, azeite, cebola e manjerição</h3>
                        <span className='text-base text-slate-700 duration-300 group-hover:text-white'>R$ 35,00</span>
                    </div>
                </div>
                <div className='card-content w-[340px] h-auto flex items-center flex-col group shadow-md rounded-lg duration-[400ms] hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='card-categoria-massas'>
                        <img src={espagueteComMolhoBranco} alt='Espaguete com molho branco' className='card-image' />
                    </div>
                    <div className='p-2 w-full h-full flex flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 mb-1 text-balance duration-300 group-hover:text-white'>Espaguete com molho branco</h2>
                        <h3 className='text-sm text-slate-500 mb-3 text-balance max-[400px]:w-full mx-auto duration-300 group-hover:text-white'>Massa italiana, molho de tomate, camarão, azeite, cebola e manjerição</h3>
                        <span className='text-base text-slate-700 duration-300 group-hover:text-white'>R$ 32,00</span>
                    </div>
                </div>
            </div>
            </Tabs.Panel>
            <Tabs.Panel className={"Painel"} value="Bebidas">
                <div className='relative grid grid-cols-3 place-items-center gap-4 max-w-screen-xl mx-auto px-4 my-7 max-xl:grid-cols-2 max-xl:max-w-screen-lg max-md:grid-cols-1'>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_1L} alt='Coca cola 1 litro' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola 1L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 4,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_1L_zero} alt='Coca cola zero 1 litro' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola zero 1L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 5,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={fanta_1L} alt='Fanta 1 litro' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Fanta 1L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 7,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={fanta_2L} alt='Fanta 2 litros' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Fanta 2L</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 9,00</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_lata} alt='Coca cola lata' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola lata 350ml</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 4,50</span>
                    </div>
                </div>
                <div className='w-[340px] h-auto flex items-center flex-col group rounded-xl duration-300 hover:bg-[#1ca350] max-lg:w-full'>
                    <div className='w-52 rounded-s-xl p-1'>
                        <img src={coca_cola_lata_zero} alt='Coca cola lata zero' className='size-52 object-cover mx-auto mb-2 rounded-full duration-500 group-hover:scale-105 max-sm:size-full' />
                    </div>
                    <div className='p-2 w-full h-full flex items-center flex-col ml-2'>
                        <h2 className='text-xl text-slate-700 text-center mb-1 duration-500 group-hover:text-white'>Coca cola lata zero 350ml</h2>
                        <span className='text-base text-slate-500 duration-500 group-hover:text-white'>R$ 8,00</span>
                    </div>
                </div>
            </div>
            </Tabs.Panel>
        </Tabs.Root>

        <BackToTop />
        
        </>
    )
}

export default Cardapio;