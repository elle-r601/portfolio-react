import "./Spacer.css"
import Button from './Button'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
gsap.registerPlugin(ScrollTrigger)

function Spacer() {

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.timeline({
        scrollTrigger: {
          trigger: ".box2",
          start: "top center",
          end: "bottom center",
          endTrigger: ".section-spacer",
          scrub: 1,
          pin:true,
          markers: true
        }
      })
      .from(".box2", {
        opacity: 0,
      }, 0)
      .from(".text4", {
        y: 10,
        stagger : {
          amount : 0.6,
        },
        duration: 1
      }, 0) 
    });

    return () => ctx.revert(); // cleanup
  
  }, [])

   
  return (
    <section className="section-spacer">
      <div className="box2">
          <h2 className="text4">Check out my work!</h2>
          {/* <h2 className="text4">Text Line Number Two</h2>
          <h2 className="text4">Text Line Number Three</h2> */}

      </div>

    </section>
  )
}

export default Spacer