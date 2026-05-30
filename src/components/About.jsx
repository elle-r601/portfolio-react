import "./Widget.css"
import Button from './Button'

function About() {
    const openLinked = () => {
        window.open("https://www.linkedin.com/in/eleora-rizkalla-08b7431b3/", '_blank', 'noopener');
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
                        <div onClick={openLinked} className="action">
                            LinkedIn
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About