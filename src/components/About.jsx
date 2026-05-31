import "./Widget.css"
import Button from './Button'

function About() {

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const element = document.getElementById(id + '-section');
        const top = element.getBoundingClientRect().top + window.scrollY - 140; 
        window.scrollTo({ top, behavior: 'smooth' });
    }
    
  return (
    <section className="section" id="about-section">
        <div className="about-widget">
            <div className="about-header">
                <h2>About Me</h2>
            </div>
            <div className="about-content">
            
                <img id="photo-of-me" src="/images/photo-of-me.JPG"></img>
        
                <div id="about-me-section">
                    <p id="about-me-para">A creative and aspiring software developer specialising in <span className="emp">Interaction Design</span> and <span className="emp">Information Security</span>. 
                        I am enthusiastic about web development and game design. 
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
        </div>

        <span id="portfolio" class="material-symbols-outlined arrow-down" onClick={handleClick}>arrow_downward_alt</span>

    </section>
  )
}

export default About