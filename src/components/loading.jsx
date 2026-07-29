import { useState } from 'react';

    const Loading = () => {
        const [loading, setLoading] = useState(true);

        window.addEventListener('load', () => {
            setLoading(false);
        })

        return (
            <div>
                {/* {loading ? ( */}
                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col bg-white w-full h-screen z-[1000]' style={{opacity: loading ? '1' : '0', visibility: loading ? 'visible' : 'hidden', transition: '.5s ease'}}>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='w-14 h-14 border-4 border-t-[#00B571] border-gray-200 rounded-full animate-spin'></div>
                        <h1 className='text-xl text-[#00B571]'>Carregando</h1>
                        </div>
                    </div>
                {/* ) : ( */}
                    <></>
                {/* )} */}
            </div>
        )
        }
export default Loading;