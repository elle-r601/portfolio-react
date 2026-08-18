import "./Widget.css"
import Button from './Button'

function About2() {

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const element = document.getElementById(id + '-section');
        const top = element.getBoundingClientRect().top + window.scrollY - 140; 
        window.scrollTo({ top, behavior: 'smooth' });
    }
    
  return (
    <section className="section" id="about-section">
        <div className="about-widget-alt">
            <div className="about-me">

                <p id="about-me-para">Hi! I'm Eleora Rizkalla, and I'm a fourth year computer science student specialising in <span className="emp">Interaction Design</span> and <span className="emp">Information Security</span>. 
                    I am enthusiastic about web development, UX/UI, research and game design. 
                </p>

                <div id="buttons">
                    <Button 
                        id="linkedin"
                        label="Linkedin"
                        url="https://www.linkedin.com/in/eleora-rizkalla-08b7431b3/"
                    />

                </div>
            </div>
        </div>

        {/* <span id="portfolio" className="material-symbols-outlined arrow-down" onClick={handleClick}>arrow_downward_alt</span> */}

    </section>
  )
}

export default About2