import { FaCircleRight } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div className="md:max-w-[95%] h-full bg-gray-50 flex items-center mx-auto">
      <section
        className="w-full bg-cover bg-center py-32 md:rounded-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          objectFit: 'cover',
        }}
      >
        <div className="container mx-auto text-left ml-[10%]  ">
          <h1 className="text-5xl font-medium mb-6 text-headersBlue">Embrace a healthier lifestyle</h1>
          <p className="text-xl mb-12 text-myBlue"> Uplifting Lives Through the Path of Wellness and Vitality.</p>
          <div href="#" className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-4 px-12 rounded-lg hover:bg-orange-600 duration-100">
            <span className="mr-3">Get Started</span>
            <FaCircleRight />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
