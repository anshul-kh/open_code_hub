import "../Styles/get.css"
function Get(){
    return(
        <div className="get-section">
            <div className="shadow"></div>
            <div className="shadow1"></div>
        <div className="get-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
        <div className="heading"> <h1 className="get-head">
            What will
            <span>You get</span>
        </h1></div>
        <div className="get-intro">
            
        <p>
           We created this to let others express their own unique 
           prespectives about diffrent topics. Express and Explore the diffrent prespectives  of others having simillar intrests all around the world.  
        </p>

        </div>
        </div>
        <div className="get-explore">
            <div className="explore" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1>Explore Diffrent Mindset</h1>
            </div>
            <div className="explore-active" data-aos="flip-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1>Innovative Ideas</h1>
            </div>
            <div className="explore" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <h1>Get Diffrent Views</h1>
            </div>
        </div>

        </div>

       
    );
}

export default Get;