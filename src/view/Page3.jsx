import { useGSAP } from '@gsap/react'
import React from 'react';
import gsap from 'gsap';

const Page3 = () => {

    useGSAP(() => {
        let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true })

        tl.to(".green", { rotation: 360 });
        tl.to(".purple", { rotation: 360 });
        tl.to(".orange", { rotation: 360 });
    })

    return (
        <>
            <div className="h-screen flex flex-row justify-around bg-slate-900 pt-20  ">
                <div className=" green m-10 box h-36 w-36 bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div className=" purple m-10 box h-36 w-36 cursor-pointer bg-gradient-to-br from-green-500 to-teal-300 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div className=" orange m-10 box h-36 w-36 cursor-pointer bg-gradient-to-br  from-yellow-500 to-red-700 shadow-lg shadow-slate-800 rounded-lg"></div>
                <div className="  click-me-text text-white text-start ms-10 opacity-0">Click me 👆    </div>
            </div>
        </>
    )
}

export default Page3