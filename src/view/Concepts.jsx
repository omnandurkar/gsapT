import React from 'react'
import Timeline from '../components/Timeline'
import ScrollTrigger from '../components/ScrollTriggerComponent'
import PinComponent from '../components/PinComponent'
import SVGAnimation from '../components/SVGAnimation'
import Cursor from '../components/Cursor'

const Concepts = () => {
    return (
        <div className='bg-slate-900 p-10  text-white '>

            <h1 className="text-4xl text-center   font-bold underline">Concepts</h1>


            <>
                <Timeline />

                <ScrollTrigger/>
                
                <PinComponent/>

                <SVGAnimation/>

                <Cursor/>
            </>

        </div>
    )
}

export default Concepts