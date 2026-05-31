import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '/src/assets/CarouselContent.json';
import "./Widget.css"
import Button from './Button'

function CarouselWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="section" id="portfolio-section">
      <div className="carousel-widget">
        {data.map((item, index) => 
          <div className={ currentIndex === index ? 'block' : 'hidden'}>
            <div key={"title_" + index}>
              <div className="carousel-header">
                <h2>{item.title}</h2>
              </div>

            <div className='carousel-col'>
              <div className='carousel-nav'>
                  {data.map((item, index) => (
                    <a href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }} 
                    key={index}
                    className={`portfolio-links ${currentIndex === index ? 'current' : ''}`}
                    >
                    {item.title}
                    </a>
                  ))}

                  <Button 
                  id="portfolio-link-buttons"
                  label={item.title + " Demo"}
                  url={item.demo}
                  />
              </div>

              <div className="carousel-content">
            
                <div id="content-top">
                  <img id="carousel-image" src={item.image} alt={item.title}></img>

                </div>
          
                <div id="carousel-section">
                    <p id="carousel-desc">{item.desc}</p>
                    
                </div>
              </div>
            </div>
            </div>
          </div>
        )}

      </div>
    </section>
    
  );
}

export default CarouselWidget;