import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '/src/assets/CarouselContent.json';

function CarouselWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    console.log("here1");
    setCurrentIndex(
      currentIndex === 0 ? data.length - 1 : currentIndex - 1
    );
  };

  const handleNextClick = () => {
    console.log("here2");
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  return (
    <section className="section" id="portfolio-section">
      <div className="carousel-widget">
        {data.map((item, index) => 
          <div className={ currentIndex === index ? 'block' : 'hidden'}>
            <div key={index}>
              <div className="carousel-header">
                <h2>{item.title}</h2>
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
        )}

        <div id="buttons">
          <div onClick={handlePreviousClick} className="action">
              Previous
          </div>
          <div onClick={handleNextClick} className="action">
              Next
          </div>

        </div>
      </div>
    </section>
    
  );
}

export default CarouselWidget;