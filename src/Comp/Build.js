import "../Styles/build.css"
import BuildAnim from "../Comp/BuildAnim"
function Build(){
    return(
        <div className="build-section">
            <div className="shadow"></div>
            <div className="shadow1"></div>
        <div className="build-text" data-aos="zoom-in-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className="heading"> <h1 className="build-head">
            Why we
            <span>Build This</span>
        </h1></div>
        <div className="build-intro">
            
        <p>
            We just want to create a platform where everyone can present their views anonymously and can not be judged on the base of their profile. We are creating a platform to  explore your own unique thoughts and dreams and share them with others without any hasitation.  
        </p>

        </div>
        </div>
        <div className="build-anim" data-aos="zoom-in-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
         <BuildAnim/>
        </div>

        </div>

       
    );
}

export default Build;