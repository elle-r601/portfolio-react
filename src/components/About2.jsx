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

                <div id="about-me-para">
                    <p>hi! i'm <span id="red-underline">Eleora</span> <span id="red-underline">Rizkalla</span>, it's nice to meet you!</p>
                    <p id="heading">who am I?</p>
                    <p id="sub">i'm a fourth year computer science student at UTS, majoring in <span id="imp">Interaction Design</span> and <span id="imp">Information Security</span></p>
                    <p id="heading">what are my passions?</p>
                    <p id="sub">i love web development, game design and game development. i love UX/UI design, but i prefer UX/UI research.</p>
                    <p id="heading">what are my personal design likes?</p>
                    <p id="sub">i like sans serif and monospaced fonts. i love lowercase text so much that i turned off auto caps lock on my iPhone and i think that emojis should only ever be used ironically.</p>
                </div>

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