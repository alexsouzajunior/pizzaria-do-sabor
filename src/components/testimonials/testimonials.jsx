import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImg from '../../assets/images/testimonials/profile1.jpg';
import profileImg2 from '../../assets/images/testimonials/profile2.jpg';
import profileImg3 from '../../assets/images/testimonials/profile3.jpg';
import profileImg4 from '../../assets/images/testimonials/profile4.jpg';
import { faStar, faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade';
import './testimonials.css'
import imagemContainerComentarios from '../../assets/images/main/imagem-container-comentarios.png'

function Testimonials() {
    const Title = props => (
        <h2 className='title-testimonials text-3xl font-semibold text-center text-[#309C5A] mt-10 mb-4 relative'>{props.dataTitle}</h2>
    )

    const SubTitle = props => (
        <h2 className='text-2xl text-center text-slate-800 font-bold mb-10'>{props.dataSubTitle}</h2>
    )
    
    const ImgProfile = props => (
        <img src={profileImg} alt='' className='size-14 rounded-full max-md:size-20' />
    )
    const ImgProfileTwo = props => (
        <img src={profileImg2} alt='' className='size-14 rounded-full max-md:size-20' />
    )
    const ImgProfileTree = props => (
        <img src={profileImg3} alt='' className='size-14 rounded-full max-md:size-20' />
    )
    const ImgProfileFour = props => (
        <img src={profileImg4} alt='' className='size-14 rounded-full max-md:size-20' />
    )
    const TitleProfile = props => (
        <h1 className='text-base text-slate-950 max-md:text-lg'>{props.dataTitleProfile}</h1>
    )
    const TextUser = props => (
        <p className='text-base text-gray-800 max-md:text-center'>{props.dataText}</p>
    )
    return (
        <>
        <Title dataTitle="Avaliações" />
        <SubTitle dataSubTitle="Veja os comentários dos nossos clientes" />

        <section id='avaliacoes'>
            <div className='flex justify-between items-center gap-4 max-w-5xl mx-auto px-4 max-lg:flex-col max-md:justify-center'>
                <Swiper modules={[Navigation]} navigation={{nextEl: '.carousel-testimonials-next', prevEl: '.carousel-testimonials-prev'}} slidesPerView={1} className='max-w-xl w-4/5'>
                    <SwiperSlide>
                        <div className='flex flex-col max-w-lg h-auto bg-white border border-[#efefef] rounded-xl p-4 max-md:mx-auto'>
                        <div className='flex justify-between items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                            <div className='flex items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                                <ImgProfile />
                                <TitleProfile dataTitleProfile="Carol" />
                            </div>
                            <FontAwesomeIcon icon={faQuoteRight} className='text-4xl text-slate-400' />
                        </div>
                        <TextUser dataText="Lorem ipsum dolor sit amet. A temporibus obcaecati sit voluptas delectus aut earum corporis ex doloribus quaerat est magni esse." />
                        <div className='flex gap-1 mt-4 max-md:justify-center'>
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col max-w-lg h-auto bg-white border border-[#efefef] rounded-xl p-4'>
                            <div className='flex justify-between items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                                <div className='flex items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                                    <ImgProfileTwo />
                                    <TitleProfile dataTitleProfile="Lucas" />
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className='text-4xl text-slate-400' />
                            </div>
                        <TextUser dataText="Lorem ipsum dolor sit amet. A temporibus obcaecati sit voluptas delectus aut earum corporis ex doloribus quaerat est magni esse." />
                        <div className='flex gap-1 mt-4 max-md:justify-center'>
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col max-w-lg h-auto bg-white border border-[#efefef] rounded-xl p-4'>
                            <div className='flex justify-between items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                            <div className='flex items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                                <ImgProfileTree />
                                <TitleProfile dataTitleProfile="Bruna" />
                            </div>
                            <FontAwesomeIcon icon={faQuoteRight} className='text-4xl text-slate-400' />
                        </div>
                        <TextUser dataText="Lorem ipsum dolor sit amet. A temporibus obcaecati sit voluptas delectus aut earum corporis ex doloribus quaerat est magni esse." />
                        <div className='flex gap-1 mt-4 max-md:justify-center'>
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col max-w-lg h-auto bg-white border border-[#efefef] rounded-xl p-4'>
                            <div className='flex justify-between items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                            <div className='flex items-center gap-2 mb-4 max-md:justify-center max-md:flex-col'>
                                <ImgProfileFour />
                                <TitleProfile dataTitleProfile="Henrique" />
                            </div>
                            <FontAwesomeIcon icon={faQuoteRight} className='text-4xl text-slate-400' />
                        </div>
                        <TextUser dataText="Lorem ipsum dolor sit amet. A temporibus obcaecati sit voluptas delectus aut earum corporis ex doloribus quaerat est magni esse." />
                        <div className='flex gap-1 mt-4 max-md:justify-center'>
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#ffcb21]' />
                        </div>
                    </div>
                    </SwiperSlide>
                    <div className='flex justify-center gap-4'>
                        <div className='carousel-testimonials-prev arrows-testimonials'>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className='carousel-testimonials-next arrows-testimonials'>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </Swiper>
                <img src={imagemContainerComentarios} alt='' className='w-[340px] max-md:mx-auto max-sm:w-4/5' />
            </div>
        </section>
        </>
    )
}

export default Testimonials;