import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import './back-to-top.css';

function BackToTop() {
    const [backToTop, showBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                showBackToTop(true)
            } else{
                showBackToTop(false)
            }
        })
    }, [])

        const scrollToTop = () => {
            window.scrollTo({
                top: 0
            })
        }
    return (
        <div className="relative">
            {/* {backToTop && ( */}
                <div className="fixed bottom-7 right-8 flex justify-center items-center bg-white shadow-md ring-2 ring-slate-500/20 w-12 h-12 rounded-full cursor-pointer duration-300 z-10 hover:scale-110 hover:ring-[#f16428]" onClick={scrollToTop} style={{opacity: backToTop ? '1' : '0', visibility: backToTop ? 'visible' : 'hidden', transition: '.4s ease'}}>
                    <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
                </div>
            {/* )} */}
        </div>
    )
}

export default BackToTop;