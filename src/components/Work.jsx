import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '/src/assets/CarouselContent.json';
import "./Widget.css"
import Button from './Button'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Work() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const wrappers = document.querySelectorAll('.card-wrapper');

        wrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector('.card-cont');
        
        if (index === wrappers.length - 1) {
            gsap.set(card, { opacity: 1, scale: 1 });
        } else {
            gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false,
            }
            })
            .set(card, { opacity: 1, scale: 1 })
            .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.01);
        }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, [])

    

  return (
    <section className="section" id="portfolio-section">
      <div className="work-widget">


        {data.map((item, index) => 
            <div className="card-wrapper" key={"title_" + index}>
                <div className="card-cont">
                    <img src={item.image} alt={item.title}></img>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <Button 
                    id="portfolio-link-buttons"
                    label="see more"
                    url="#"
                    />
                </div>
            </div>
            
        )}

      </div>
    </section>
    
  );
}

export default Work;