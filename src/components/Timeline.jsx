import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import img1 from "./timeline.png"


const Timeline = () => {

    var t1 = gsap.timeline()

    useGSAP(() => {

        t1.to(".box1", {
            x : 1000,
            rotation: 360,
            duration: 1.5,
            delay : 1
        });

        t1.to(".box2", {
            x : 1000,
            rotation: 360,
            duration: 1.5,
        });

        t1.to(".box3", {
            x : 1000,
            rotation: 360,
            duration: 1.5,
        });

        t1.to(".img1", {
            y : -550,
            opacity: 1,
            // display: "block",
            
            duration: 1.5,
        })

    })


    return (
        <div className='overflow-hidden bg-slate-900'>
            <h1 >Timeline</h1>


            <div className='space-y-5 p-5'>

                <div className='box1 h-40 w-40 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg '></div>

                <div className='box2 h-40 w-40 bg-gradient-to-br from-green-500 to-teal-300 shadow-lg shadow-slate-800 rounded-lg '></div>

                <div className='box3 h-40 w-40 bg-gradient-to-br from-yellow-500 to-red-700 shadow-lg shadow-slate-800 rounded-lg '></div>
            </div>

            <img className='img1 opacity-0  rounded shadow-lg shadow-slate-800 ' src={img1} alt="timeline" />
        </div>
    )
}

export default Timeline