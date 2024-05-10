import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1 = () => {

    useGSAP(() => {
        gsap.to(".box", {
            x: 500,
            duration: 2,
            delay: 1
        })
    })

    return (
        <>
            <div className="h-screen bg-slate-900 pt-56">
                <div class="box h-96 w-96  bg-gradient-to-br from-blue-500 to-purple-700 shadow-lg rounded-lg "></div>

            </div>

        </>
    )
}

export default Page1