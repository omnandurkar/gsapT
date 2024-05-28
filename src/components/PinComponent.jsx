import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PinComponent = () => {

  useGSAP(() => {
    gsap.to('#pin h2', {
      x: '-150%',
      scrollTrigger: {
        trigger: '#pin',
        scroller: "body",
        start: 'top 0%',
        end: 'top -450%',
        scrub: 2,
        pin: true,
      }
    });


    // pinAnimation.kill();
    ScrollTrigger.refresh();

  }, []);

  return (
    <div >
      <h1 className="text-4xl text-center font-bold underline">Pin</h1>
      <div id="pin" className="h-screen mt-0 px-20">
        <h2 className="text-[514px] translate-x-96">Experience</h2>
      </div>
      {/* <div className='bg-slate-500 h-screen'>

      </div> */}
    </div>
  );
};

export default PinComponent;
