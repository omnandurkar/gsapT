import React from 'react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Page2 = () => {

    const gsapRef1 = useRef(null);
    const gsapRef2 = useRef(null);
    const gsapRef3 = useRef(null);

    useEffect(() => {
        gsap.to(gsapRef1.current, {
            x: 1300,
            duration: 3,
            delay: 1,
            rotate: 360,
            // scale: 0.5,
            borderRadius: '50%',
            repeat: -1,
            yoyo: true,
        });

        gsap.to(gsapRef2.current, {
            x: 1300,
            duration: 2,
            delay: 2,
            rotate: 360,
            // scale: 0.5,
            borderRadius: '50%',
            repeat: -1,
            yoyo: true,
        });

        gsap.to(gsapRef3.current, {
            x: 1300,
            duration: 1,
            delay: 3,
            rotate: 360,
            // scale: 0.5,
            borderRadius: '50%',
            repeat: -1,
            // opacity: 0.5,
            yoyo: true,
        
        });

    });


    return (
        <>
            <div className="h-screen flex flex-col justify-around bg-slate-900  p-10">
                <div ref={gsapRef1}  className=" box h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div ref={gsapRef2}  className=" box h-16 w-16 bg-gradient-to-br from-green-500 to-teal-300 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div ref={gsapRef3}  className=" box h-16 w-16 bg-gradient-to-br from-yellow-500 to-red-700 shadow-lg shadow-slate-800 rounded-lg"></div>
            </div>

        </>
    )
}

export default Page2