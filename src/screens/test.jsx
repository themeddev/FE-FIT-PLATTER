import { FaCircleRight } from "react-icons/fa6";


const Test = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mx-auto mb-12 gap-4">
      <section
        className="w-full max-h-[250px] bg-cover bg-center py-32 md:rounded-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          objectFit: 'cover',
        }}
      >
        <div className="container mx-auto text-center ">
          <h1 className="md:text-5xl text-3xl font-medium mb-6 text-headersBlue">Home</h1>
        </div>
      </section>
      <a href="#" className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-3 px-10 rounded-lg hover:bg-orange-600 duration-100">
        Custom
      </a>
    </div>
  );
};

export default Test;
