import HeroCopy from "../Navbar-Footer/FirstSection";
import img from '../../../../public/images/custom.jpeg'

const CustomApp = () => {

    const title = 'Custom';


    return ( 
    <>
        <HeroCopy title={title} imgSrc={img} />
    </> 
    );
}
 
export default CustomApp;