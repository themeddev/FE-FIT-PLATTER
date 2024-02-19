import { FaCircleRight } from "react-icons/fa6";
import { motion } from 'framer-motion'


const HeroSection = () => {


  return (
    <div className="md:max-w-[95%] h-full flex items-center mx-auto mb-12">
      <section
        className="w-full bg-cover bg-center py-32 md:rounded-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          objectFit: 'cover',
        }}
      >
        <motion.div 
          animate={{x:0, opacity : 100}} 
          initial={{x : -200 , opacity : 0}} 
          transition={{ delay: 0.3 }}
          className="container mx-auto text-left ml-[10%]"
        >
          <h1 className="md:text-5xl text-3xl font-medium mb-6 text-headersBlue">Embrace a healthier lifestyle</h1>
          <p className="md:text-xl text-l mb-12 text-myBlue"> Uplifting Lives Through the Path of Wellness and Vitality.</p>
          <div href="#" className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-3 px-8 lg:py-4 lg:px-12 rounded-lg hover:bg-orange-600 duration-100">
            <span className="mr-3">Get Started</span>
            <FaCircleRight />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
