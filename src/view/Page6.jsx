import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Page6 = () => {
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [roti, setRoti] = useState(0);
    const flyRef = useRef(null);

    useEffect(() => {
        gsap.to(flyRef.current, {
            x: xValue,
            y: yValue,
            rotate: roti,
            duration: 0.5,
        });
    }, [xValue, yValue, roti]);

    const playBeep = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'square'; 
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // Frequency in hertz 
        oscillator.connect(audioCtx.destination);
        oscillator.start();

        setTimeout(() => {
            oscillator.stop();
        }, 200);
    };

    const handleClick = () => {
        const randomX = gsap.utils.random(-500, 500, 10);
        setXValue(randomX);

        const randomY = gsap.utils.random(-300, 300, 10);
        setYValue(randomY);

        const randomRoti = gsap.utils.random(-360, 360, 30);
        setRoti(randomRoti);

        playBeep();
    };

    return (
        <>
            <div>
                <h1 className='text-3xl bg-slate-300 font-bold text-center pt-10 '>Catch The Fly</h1>
            </div>
            <main className='h-screen bg-slate-300 text-white flex flex-col justify-center items-center space-y-10'>
                <img onClick={handleClick} ref={flyRef} src='https://images.vexels.com/media/users/3/242242/isolated/preview/1538cd5ccc4dd0bd368ae34eb250dfbb-fly-from-top-geometric-color-stroke.png' alt=''
                    className='w-40 h-40 cursor-crosshair' />
            </main>
        </>
    );
};

export default Page6;
