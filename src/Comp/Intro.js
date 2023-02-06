
import hero from "../assets/hero.svg";
import "../Styles/intro.css"
function Intro(){
    return (
        <div className="intro-container" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="shadow"></div>
            <div className="shadow1"></div>
            <div className="shadow2"></div>
            <div className="shadow3"></div>
            <div className="intro">
            <h1>
            Programming isn't about 
            <br />
            <span className="span1">
            what you know;
            </span>
            <br />
             it's about what you<br /> <span> can figure out. </span>
            </h1>

         
             
            </div>

            <div className="hero">
                
               <img className="hero-img" src={hero} alt="Hero"/>
            </div>
        </div>
        
    );
}

export default Intro;