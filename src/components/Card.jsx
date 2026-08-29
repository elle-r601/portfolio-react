import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '/src/assets/CarouselContent.json';
import "./Widget.css"
import Button from './Button'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip);

function Card() {

    useEffect(() => {

        const cards = document.querySelectorAll(".card");
        const contentGroups = document.querySelectorAll(".content__group");

        console.log(cards);
        const activeClass = "is-active";

        const updateCard = (card, idx, active) => {
            console.log("update card called");
            const cardInner = card.querySelector(".card__inner");
            const image = card.querySelector(".card__image");

            // Bail out if we're in the middle of a flip
            if (Flip.isFlipping(cardInner)) return;

            const cardState = Flip.getState(cardInner, {
                props: "box-shadow, border-radius"
            });
            const imageState = Flip.getState(image);
            card.classList.toggle(activeClass, active);

            const duration = active ? 0.7 : 0.5;
            const ease = "quint.out";

            const cardContent = contentGroups[idx];

            if (cardContent) {
                gsap.killTweensOf(cardContent);
                gsap.to(cardContent, {
                    duration: active ? 1 : 0.2,
                    ease: "expo.out",
                    stagger: 0.1,
                    alpha: active ? 1 : 0,
                    y: active ? 0 : 20,
                    delay: active ? 0.4 : 0
                });
            }
            
            Flip.from(cardState, {
                duration: duration,
                ease: ease,
                absolute: true,
                zIndex: 1
            });

            Flip.from(imageState, {
                duration: duration,
                absolute: true,
                ease: ease,
                simple: true
            });

        };

        const clickHandlers = new Map();

        cards.forEach((card, idx) => {
            updateCard(card, idx, false);

            const handler = (evt) => {
                console.log("adding listener");
                updateCard(card, idx, !card.classList.contains(activeClass));
            };

            clickHandlers.set(card, handler);
            card.addEventListener("click", handler);
        });

        return () => {
            clickHandlers.forEach((handler, card) => {
                card.removeEventListener("click", handler);
            });
            // Kill all GSAP animations
            gsap.killTweensOf(contentGroups);
            gsap.killTweensOf(cards);
        };


    }, [])

  return (
    <section className="section">
      <div className="card-widget">
        <div className='cards'>
            <div className='card' data-card>
                <div className='card__inner'>
                    <div className='card__image'>
                        <img src='https://xl.movieposterdb.com/07_12/2006/414993/xl_414993_0cbd42ba.jpg' alt='The Fountain' />
                    </div>
                </div>
            </div>

            <div className='card' data-card>
                <div className='card__inner'>
                    <div className='card__image'>
                        <img src='https://xl.movieposterdb.com/20_06/2017/5109784/xl_5109784_051e160f.jpg' alt='Mother!' />
                    </div>
                </div>
            </div>

        </div>

        <div className='content'>
            <div className='content__group'>
                <p className='content__heading'>The Fountain</p>
                <p className='content__category'>Science Fiction</p>
                <p className='content__description'>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.
                </p>
            </div>

            <div className='content__group'>
                <p className='content__heading'>Mother!</p>
                <p className='content__category'>Horror</p>
                <p className='content__description'>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui.
                </p>
            </div>
        </div>

      </div>

        
    </section>
    
  );
}

export default Card;