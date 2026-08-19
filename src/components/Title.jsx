import "./Widget.css"
import Button from './Button'
import "./Title.css"

function Title() {

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
    
  return (
    <section className="section" id="title-section">
        <div className="title-widget">
            <div className="title-header">
                <svg id="title-icon" viewBox="0 0 100 50">
                    <image href="/newIcon.svg" width="100" height="50" opacity="1" className="icon-1"/>
                    <image href="/newIcon2.svg" width="100" height="50" opacity="0" className="icon-2"/>
                </svg>
               
            </div>
            
        </div>

    </section>
  )
}

export default Title