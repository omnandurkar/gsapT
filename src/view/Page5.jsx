import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Page5 = () => {
    const [xValue, setXValue] = useState(0);
    const boxRef = useRef(null);

    useGSAP(() => {
        gsap.to(boxRef.current, {
            x: xValue,
            duration: 0.5,
        });
    }, [xValue]);

    const handleClick = () => {
        const random = gsap.utils.random(-500, 500, 10);
        setXValue(random);
    };

    return (
        <>
            <main className='h-screen bg-slate-900 text-white flex flex-col justify-center items-center space-y-10'>
                <button onClick={handleClick}
                    className='p-2 bg-yellow-400 rounded-md hover:bg-yellow-500 active:scale-90'>
                    Animate
                </button>
                <div ref={boxRef} className="box h-40 w-40 bg-red-600 rounded-md"></div>
            </main>

            
        </>
    );
};

export default Page5;
