import { HiMiniHomeModern } from "react-icons/hi2";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { MdNature } from "react-icons/md";
import { motion } from 'framer-motion'
const WhyUs = () => {
  const cardContent = [
    {
      icon: <HiMiniHomeModern size={35} />,
      title: 'Own fruit orchard',
      description: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
    {
      icon: <PiNumberSquareOneFill size={35} />,
      title: '#1 Healthy Fruit Salad',
      description: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
    {
      icon: <MdNature size={35} />,
      title: 'Natural Plant',
      description: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
  ];


  return (
    <div className="w-full h-full lg:h-[450px] bg-white flex items-center justify-arround flex-col p-[5%] lg:px-[10%]">
      <motion.div 
          initial={{ scaleZ: -100 , opacity: 0}}
          whileInView={{ opacity: 1, scaleZ: 0}}
          transition={{ delay: 0.4 }}
        className="flex md:flex-row flex-col">
        <h3 className="font-Outfit text-2xl md:text-3xl text-myBlue max-w-[400px]">
          WHY CHOOSE US <br />FOR
          <span className="text-myOrange"> YOUR HEALTHY FOOD</span>
        </h3>
        <p className="text-gray-500 font-Poppins md:w-2/5 md:m-auto w-full">We continue to consistently choose and maintain the quality of the fruit served so that it remains fresh and nutritious when you eat it.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-4 px-[10%]">
        {cardContent.map((item, index) => (
          <motion.div 
            initial={{ scaleZ: -100 , opacity: 0}}
            whileInView={{ opacity: 1, scaleZ: 0 }}
            transition={{ delay: 0.3 }}

            key={index}
            className={`flex flex-col md:flex-row mt-6 text-gray-700 bg-white shadow-lg duration-300 bg-clip-border rounded-xl w-96 ${index === 1 ? 'shadow-[#FFE8C8]' : ''}`}
          >
            <div className="p-6">
              <div className="w-12 h-12 mb-4 text-myOrange">
                {item.icon}
              </div>
              <h5 className="block mb-2 font-Poppins text-xl antialiased font-semibold leading-snug tracking-normal text-myBlue">
                {item.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
