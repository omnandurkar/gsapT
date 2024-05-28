import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SVGAnimation = () => {
    const [path, setPath] = useState("M 10 100 Q 500 100 1400 100");

    const finalPath = "M 10 100 Q 500 100 1400 100";

    const stringRef = useRef(null);

    useGSAP(() => {
        const string = stringRef.current;

        const handleMouseMove = (event) => {
            const svgRect = event.currentTarget.getBoundingClientRect();
            const xRelativeToSVG = event.clientX - svgRect.left;
            const yRelativeToSVG = event.clientY - svgRect.top;
    
            const newX = 10 + (xRelativeToSVG - 100) / 1; // Calculate new x coordinate
            const newY = 100 + (yRelativeToSVG - 80) / 1; // Calculate new y coordinate
    
            const newPath = `M 10 100 Q ${newX} ${newY} 1400 100`;
            setPath(newPath);
        };

        string.addEventListener("mousemove", handleMouseMove);

        string.addEventListener("mouseleave", () => {
            gsap.to("svg path", {
                attr : {d : finalPath },
                duration : 0.8,
                ease : "elastic.out(1,0.2)",
            })
            console.log("left");
        });

        return () => {
            string.removeEventListener("mousemove", handleMouseMove);
            string.removeEventListener("mouseleave", () => {
                console.log("left");
            });
        };
    }, []);

    useEffect(() => {
        gsap.to("svg path", {
            attr: { d: path },
            duration : 0.3,
            ease : "power3.out",
        });
    }, [path]);

    return (
        <div>

<h1 className="text-4xl text-center font-bold underline">SVG Animation</h1>

            <div
                ref={stringRef}
                id='string'
                className='h-[210px] text-white'
            >
                <svg width="1400" height="200">
                    <path d={path} stroke="white" fill="transparent" />
                </svg>
            </div>
            
        </div>
    );
};

export default SVGAnimation;
