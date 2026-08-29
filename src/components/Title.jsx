
import "./Title.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Title() {

    const container = useRef();
    const titleIcon = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            const animation = gsap.from(titleIcon.current, {
                y: "80vh",
                scale: 20,
                yPercent: -80,
                paused: true, 
            });

            ScrollTrigger.create({
                animation: animation,
                scrub: true,
                trigger: ".content",
                start: "top bottom",
                end: "top center",
                endTrigger: ".content2",
                // pin: titleIcon.current,  
                // pinSpacing: false,
                onEnter: () => {
                    // When animation completes, switch to fixed
                    titleIcon.current.style.position = "fixed";
                    titleIcon.current.style.top = "2.8rem";
                },
            
            });

        }, container);

        return () => ctx.revert();

    }, []);

    
    
  return (
    <section id="title-section" ref={container}>
        <div className="title-widget">
            <div className="title-header">
                <svg id="title-icon" ref={titleIcon} viewBox="0 0 100 50">
                    <image href="/newIcon.svg" width="100" height="50" opacity="1" className="icon-1"/>
                    <image href="/newIcon2.svg" width="100" height="50" opacity="0" className="icon-2"/>
                </svg>
               
            </div>
            
        </div>
        <div className="content"></div>
        <div className="content2"></div>
    </section>


  )
}

export default Title