import HeroCopy from "../Navbar-Footer/FirstSection";
import Map from "./Map";
import OurChefs from "./OurChefs";
import ServicesInfo from "./ServicesInfo";

const AboutUsApp = () => {

    const title = 'About us';
    const imgSrc = 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    
    
    return ( 
        <>
            <HeroCopy title={title} imgSrc={imgSrc} />
            <ServicesInfo />
            <OurChefs />
            <Map />
        </>
     );
}
 
export default AboutUsApp;