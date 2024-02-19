import HeroCopy from "../Navbar-Footer/FirstSection";
import ContactForm from "./ContactForm";

const ContactUsApp = () => {
    
    let title = 'Contact us';
    let imgSrc = 'https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return ( 
        <>
            <HeroCopy title={title} imgSrc={imgSrc} />
            <ContactForm />
        </>
     );
}
 
export default ContactUsApp;