import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Page4 = () => {
    const gsapRef1 = useRef(null);

    useEffect(() => {
        const nav = document.querySelector('.nav');

        let tween = gsap.to(gsapRef1.current, {
            duration: 2,
            x: 1300,
            xPercent: -100,
            rotation: 360,
            ease: "none",
            paused: true
        });

        // click handlers for controlling the tween instance...
        document.querySelector("#play").onclick = () => tween.play();
        document.querySelector("#pause").onclick = () => tween.pause();
        document.querySelector("#resume").onclick = () => tween.resume();
        document.querySelector("#reverse").onclick = () => tween.reverse();
        document.querySelector("#restart").onclick = () => tween.restart();
    }, []);

    return (
        <>
            <div className="h-screen flex flex-col justify-around bg-slate-900 p-10">
                <>
                    <div ref={gsapRef1} className="box h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg"></div>
                </>

                <div className="container mt-4 flex justify-center items-center">
                    <div className="nav light flex space-x-6 ms-10">
                        <button id="play" className="m-2 p-2 px-4 border bg-slate-300 rounded-full ">Play</button>
                        <button id="pause" className="m-2 p-2 px-4 border bg-slate-300 rounded-full  ">Pause</button>
                        <button id="resume" className="m-2 p-2 px-4 border bg-slate-300 rounded-full  ">Resume</button>
                        <button id="reverse" className="m-2 p-2 px-4 border bg-slate-300 rounded-full  ">Reverse</button>
                        <button id="restart" className="m-2 p-2 px-4 border bg-slate-300 rounded-full  ">Restart</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Page4;
