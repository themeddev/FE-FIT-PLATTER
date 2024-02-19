import HeroCopy from "../Navbar-Footer/FirstSection";
import Food from "./Foods/Food";
import RecommendationPg from "./RecommendationPg";
import Recommendations from "./Recommendations";

const HomeApp = () => {

    const title = 'Home';
    const imgSrc = 'https://images.unsplash.com/photo-1495471547134-98698271c52a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    
    
    return ( 
        <>
            <HeroCopy title={title} imgSrc={imgSrc} />
            <RecommendationPg />
            <Recommendations />
            <Food />
        </>
     );
}
 
export default HomeApp;