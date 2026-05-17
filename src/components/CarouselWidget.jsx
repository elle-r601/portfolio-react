import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '/src/assets/CarouselContent.json';

function CarouselWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="section" id="portfolio-section">
      <div className="carousel-widget">
        {data.map((item, index) => 
          <div className={ currentIndex === index ? 'block' : 'hidden'}>
            <div key={index}>
              <div className="carousel-header">
                <h2>{item.title}</h2>
              </div>

            <div className='carousel-col'>
              <div className='carousel-nav'>
                  {data.map((item, index) => (
                    <a href="#" 
                    onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }} 
                    key={index}
                    className={ currentIndex === index ? 'current' : ''}
                    >
                    {item.title}
                    </a>
                  ))}

                  <a href={item.demo || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`action alt ${!item.demo ? 'disabled' : ''}`}
                  onClick={!item.demo ? (e) => e.preventDefault() : undefined}
                  >Demo
                  </a>
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