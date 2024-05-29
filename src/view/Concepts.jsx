import React from 'react'
import Timeline from '../components/Timeline'
import ScrollTrigger from '../components/ScrollTriggerComponent'
import PinComponent from '../components/PinComponent'
import SVGAnimation from '../components/SVGAnimation'
import Cursor from '../components/Cursor'
import TextAnimation from '../components/TextAnimation'

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

                <TextAnimation/>
            </>

            <h2 className='text-4xl text-center my-32  font-bold'>Are tanik aur upar niche karo   इतना में hi लूल hovigye kya</h2>


        </div>
    )
}

export default Concepts