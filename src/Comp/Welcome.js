import "../Styles/welcome.css"
import WelcomeAnim from "../Comp/WelcomeAnim"
function Welcome(){
    return(
        <div className="wel-section">
            <div className="shadow"></div>
            <div className="shadow1"></div>
        <div className="wel-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className="heading"> <h1 className="wel-head">
            Welcome To
            <span>Open Code Hub</span>
        </h1></div>
        <div className="wel-intro">
            
        <p>
            Open Code hub is platform where diffrent Topics are presented and you can giv your ideas about them . This platform allows you to present your ideas anonymously and  anyone can view your ideas and thoughts without knowing your identity. The topics are related to Prognramming and will be regularly updated after a week.  
        </p>

        </div>
        </div>
        <div className="wel-anim" data-aos="zoom-in-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
         <WelcomeAnim/>
        </div>

        </div>

       
    );
}

export default Welcome;