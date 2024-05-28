import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useGSAP(() => {
        const main = document.querySelector("#main");

        main.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursorRef.current, {
                x: clientX - 40 ,
                y: clientY -100 ,
                duration : 1,
                ease : "back.out"
            });
        });

    }, []);

    return (
        <div id='main' className='h-screen  bg-slate-600 rounded-xl '>
            <h1 className='text-4xl text-center font-bold underline'>Cursor</h1>
            <div ref={cursorRef} id="cursor" className='w-4 h-4 bg-white rounded-full z-50'></div>
        </div>
    );
}

export default Cursor;
