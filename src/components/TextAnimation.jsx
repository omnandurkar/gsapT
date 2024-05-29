import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TextAnimation = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const breakTheText = () => {
            const h6 = document.querySelector("h6");
            const h6Text = h6.textContent;

            const splittedText = h6Text.split("");
            const halfValue = Math.ceil(splittedText.length / 2);

            let clutter = "";

            splittedText.forEach((elem, idx) => {
                if (idx === 6 && elem === 'i') {
                    clutter += `<span class='i inline-block relative'>ı<span class='dot absolute text-red-500'>.</span></span>`;
                } else if (idx < halfValue) {
                    clutter += `<span class='a inline-block'>${elem}</span>`;
                } else {
                    clutter += `<span class='b inline-block'>${elem}</span>`;
                }
            });

            h6.innerHTML = clutter;
        };

        breakTheText();

        gsap.from("h6 .a", {
            y: 80,
            duration: 0.6,
            delay: 0.5,
            stagger: 0.15,
            opacity: 0,
            scrollTrigger: {
                trigger: 'h6',
                start: 'top 80%',
                end: 'bottom 40%',
                // markers: true,
                scrub: 2
            }
        });

        gsap.from("h6 .b", {
            y: 80,
            duration: 0.6,
            delay: 0.5,
            stagger: -0.15,
            opacity: 0,
            scrollTrigger: {
                trigger: 'h6',
                start: 'top 80%',
                end: 'bottom 40%',
                // markers: true,
                scrub: 2
            }
        });

        gsap.from("h6 .i", {
            y: 110,
            duration: 2,
            delay: 1.5,
            opacity: 0,
            ease: "back.out",
            scrollTrigger: {
                trigger: 'h6',
                start: 'top 40%',
                end: 'bottom 60%',
                // markers: true,
                scrub: 2
            }
        });

        gsap.from("h6 .dot", {
            y: 110,
            duration: 5,
            delay: 1.5,
            opacity: 0,
            ease: "elastic.out",
            scrollTrigger: {
                trigger: 'h6',
                start: 'top 70%',
                end: 'bottom 40%',
                // markers: true,
                scrub: 2
            }
        });
    }, []);

    return (
        <div className='h-screen mt-32 bg-slate-900 p-10 text-white flex flex-col justify-center items-center'>
            <h6 className="text-9xl text-center font-bold overflow-y-hidden">TextAnimation</h6>
            {/* <div className='h-screen'></div> */}
        </div>
    );
};

export default TextAnimation;
