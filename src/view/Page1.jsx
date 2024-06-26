import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';

const Page1 = () => {
    const gsapRef1 = useRef(null);
    const gsapRef2 = useRef(null);

    useEffect(() => {
        gsap.to(gsapRef1.current, {
            x: 1300,
            duration: 2,
            delay: 1,
            rotate: 360,
            scale: 0.5,
            repeat: -1,
            yoyo: true,
        });

        gsap.from(gsapRef2.current, {
            x: 1300,
            duration: 2,
            delay: 2.5,
            rotate: 360,
            scale: 2.5,
            // repeat: -1,
            yoyo: true,
            onComplete: () => {
                gsap.to(".click-me-text", {
                    duration: 0.5,
                    opacity: 1,
                    delay: 0.5,
                    y: -120,
                    ease: "back.out",
                });
            },
        });

        const clickHandler = () => {
            gsap.to(".box", {
                duration: 0.5,
                opacity: 0,
                y: -100,
                stagger: 0.1,
                ease: "back.in"
            });
        };

        gsapRef2.current.addEventListener("click", clickHandler);

        return () => {
            gsapRef2.current.removeEventListener("click", clickHandler);
        };
    }, []);

    return (
        <div className='bg-slate-900 text-white'>
            <div className="h-screen flex flex-col justify-around  pt-10">
                <div ref={gsapRef1} className="m-10 box h-36 w-36 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div ref={gsapRef2} className="m-10 box h-16 w-16 cursor-pointer bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div className="click-me-text text-white text-start ms-10 opacity-0">Click me 👆    </div>
            </div>

            <h3 className='text-3xl text-center font-bold '>Anim2</h3>

            <Page3 />

            <h3 className='text-3xl text-center font-bold'>Anim3</h3>

            <Page4 />

            <h3 className='text-3xl text-center font-bold'>Anim4</h3>


            <Page5 />
            <h3 className='text-3xl text-center font-bold'>Anim5</h3>

            <Page2 />


        </div>
    );
};

export default Page1;
