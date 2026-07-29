import comboOne from '../../assets/images/combos/combo1.png'
import comboTwo from '../../assets/images/combos/combo2.png'
import comboTree from '../../assets/images/combos/combo3.png'
import comboFour from '../../assets/images/combos/combo4.png'

function ProductSlide(){
    const ImageComboOne  = props => (
        <img src={comboOne} alt='Imagem do combo 1' className='z-10 w-44 h-auto object-cover duration-500 group-hover:scale-110' />
    )
    const ImageComboTwo  = props => (
        <img src={comboTwo} alt='Imagem do combo 2' className='z-10 w-44 h-auto object-cover duration-500 group-hover:scale-110' />
    )
    const ImageComboTree  = props => (
        <img src={comboTree} alt='Imagem do combo 3' className='z-10 w-44 h-auto object-cover duration-500 group-hover:scale-110' />
    )
    const ImageComboFour  = props => (
        <img src={comboFour} alt='Imagem do combo 4' className='z-10 w-44 h-auto object-cover duration-500 group-hover:scale-110' />
    )
    return (
        <>
            <div className='flex justify-center items-center gap-4 flex-wrap pb-10 max-w-7xl mx-auto'>
                <div>
                    <div className='group flex justify-start items-center gap-4 w-auto p-4 h-auto card-product shadow-md rounded-xl relative duration-300 hover:bg-[#1CA350] max-xl:w-full max-[1100px]:flex-col max-md:w-full max-sm:h-auto max-sm:w-full'>
                        <ImageComboOne />
                            <div className='w-80 pl-4 max-md:px-4 max-sm:text-center max-md:w-full'>
                                <h2 className='text-lg text-balance leading-snug text-black mb-3 group-hover:text-white max-[1100px]:text-center max-sm:text-lg'>Pizza de calabresa + refrigerante coca-cola 1L</h2>
                                <span className='text-base text-stone-700 group-hover:text-white max-[1100px]:flex max-[1100px]:justify-center max-sm:text-base'>R$ 28,00</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className='group flex justify-start items-center gap-4 w-auto p-4 h-auto card-product shadow-md rounded-xl relative duration-300 hover:bg-[#1ca350] max-xl:w-full max-[1100px]:flex-col max-md:w-full max-sm:h-auto max-sm:w-full'>
                            <ImageComboTwo />
                            <div className='w-80 pl-4 max-md:px-4 max-sm:text-center max-md:w-full'>
                                <h2 className='text-lg text-balance leading-snug text-black mb-3 group-hover:text-white max-[1100px]:text-center max-sm:text-lg'>Pizza de calabresa + refrigerante coca-cola zero 1L</h2>
                                <span className='text-base text-stone-700 group-hover:text-white max-[1100px]:flex max-[1100px]:justify-center max-sm:text-base'>R$ 29,99</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group flex justify-start items-center gap-4 w-auto p-4 h-auto card-product shadow-md rounded-xl relative duration-300 hover:bg-[#1ca350] max-xl:w-full max-[1100px]:flex-col max-md:w-full max-sm:h-auto max-sm:w-full'>
                            <ImageComboTree />
                            <div className='w-80 pl-4 max-md:px-4 max-sm:text-center max-md:w-full'>
                                <h2 className='text-lg text-balance leading-snug text-black mb-3 group-hover:text-white max-[1100px]:text-center max-sm:text-lg'>Pizza de frango com catupiry + refrigerante fanta 2L</h2>
                                <span className='text-base text-stone-700 group-hover:text-white max-[1100px]:flex max-[1100px]:justify-center max-sm:text-base'>R$ 35,99</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='group flex justify-start items-center gap-4 w-auto p-4 h-auto card-product shadow-md rounded-xl relative duration-300 hover:bg-[#1ca350] max-xl:w-full max-[1100px]:flex-col max-md:w-full max-sm:h-auto max-sm:w-full'>
                            <ImageComboFour />
                            <div className='w-80 pl-4 max-md:px-4 max-sm:text-center max-md:w-full'>
                                <h2 className='text-lg text-balance leading-snug text-black mb-3 group-hover:text-white max-[1100px]:text-center max-sm:text-lg'>Pizza de mussarela + refrigerante fanta 1L</h2>
                                <span className='text-base text-stone-700 group-hover:text-white max-[1100px]:flex max-[1100px]:justify-center max-sm:text-base'>R$ 23,00</span>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default ProductSlide;