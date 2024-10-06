import React from 'react';
import '../styles/About.css';
import HTMLIcon from '../images/HTMLIcon.png';
import CSSIcon from '../images/CSSIcon.png';
import JavaScriptIcon from '../images/JavaScriptIcon.png';
import ReactIcon from '../images/ReactIcon.png';
import PythonIcon from '../images/PythonIcon.png';
import JavaIcon from '../images/JavaIcon.png';
import GolandIcon from '../images/GolandIcon.png';
import GoIcon from '../images/goIcon.png';
import FireBaseIcon from '../images/FireBaseIcon.png';
import VisualStudioIcon from '../images/VisualStudioIcon.png';
import SQLIcon from '../images/SQLIcon.png';
import PostgreIcon from '../images/PostgreIcon.png';

const About = () => {
  return (
    <section id="about" className="about-section">
        <div>
            <h1>About me</h1>
            <p>
                I am an engineer passionate about technology with a strong background in computer engineering, currently studying at TEC San Carlos. 
                I'm particularly interested in software development, especially in the web and database sector, since 
                I am attracted to frameworks like React.js and essential tools like HTML, CSS and JavaScript. 
                In addition to my knowledge in the following technologies, I also have experience in the banking and financial sector, 
                thanks to a technical degree in banking and finance that I took along with my bachelor's degree. For more information you can see my CV in the button above that says “Download CV”.
            </p>
        </div>
      <div className='tech-skills-container'>
        <h2>Technical Skills</h2>
        <div className="techIcons">
            <div className="techIcon">
            <img src={HTMLIcon} alt="HTML" />
            <p>HTML</p>
            </div>
            <div className="techIcon">
            <img src={CSSIcon} alt="CSS" />
            <p>CSS</p>
            </div>
            <div className="techIcon">
            <img src={JavaScriptIcon} alt="JavaScript" />
            <p>JavaScript</p>
            </div>
            <div className="techIcon">
            <img src={ReactIcon} alt="React.js" />
            <p>React.js</p>
            </div>
            <div className="techIcon">
            <img src={PythonIcon} alt="Python" />
            <p>Python</p>
            </div>
            <div className="techIcon">
            <img src={JavaIcon} alt="Java" />
            <p>Java</p>
            </div>
            <div className="techIcon">
            <img src={GolandIcon} alt="Goland" />
            <p>Goland</p>
            </div>
            <div className="techIcon">
            <img src={GoIcon} alt="Go" />
            <p>Go</p>
            </div>
            <div className="techIcon">
            <img src={FireBaseIcon} alt="Firebase" />
            <p>Firebase</p>
            </div>
            <div className="techIcon">
            <img src={VisualStudioIcon} alt="Visual Studio" />
            <p>Visual Studio</p>
            </div>
            <div className="techIcon">
            <img src={SQLIcon} alt="SQL" />
            <p>SQL Server</p>
            </div>
            <div className="techIcon">
            <img src={PostgreIcon} alt="PostgreSQL" />
            <p>PostgreSQL</p>
            </div>
        </div>
      </div>
      
      <div className='social-skills-container'>
        <h2 className='social-skills-title'>Social Skills</h2>
        <ul className="social-skills">
            <li>Teamwork</li>
            <li>Critical Thinking</li>
            <li>Innovation and Creativity</li>
            <li>Resilience and Adaptability</li>
            <li>Mentoring and Coaching</li>
            <li>Diversity Management</li>
        </ul>
      </div>

    </section>
  );
};

export default About;
