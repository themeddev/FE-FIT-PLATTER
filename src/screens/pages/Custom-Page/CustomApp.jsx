import HeroCopy from "../Navbar-Footer/FirstSection";

const CustomApp = () => {

    const title = 'Custom';
    let imgSrc = 'https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return ( 
    <>
        <HeroCopy title={title} imgSrc={imgSrc} />
    </> 
    );
}
 
export default CustomApp;