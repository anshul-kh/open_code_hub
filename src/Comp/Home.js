import Intro from './Intro';
import Welcome from './Welcome';
import Build from './Build';
import Get from './Get';
import Footer from './Footer';


function Home (){
    return(
        <div>
            <Intro/>
            <Welcome/>
            <Get/>
            <Build/>
            <Footer/>
        </div>
    );
}
export default Home;
