import { motion } from 'framer-motion';

const HomeSection = () => {
    return (
      <div className="w-full h-full flex flex-col items-center mx-auto mb-12 gap-10">
        <section
          className="w-full max-h-[250px] bg-cover bg-center py-32 items-center md:rounded-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            objectFit: 'cover',
          }}
        >
          <div className="container flex flex-col items-center justify-center h-full">
            <motion.h1 
              className="md:text-5xl text-3xl font-Outfit text-headersBlue"
              animate={{ opacity : 100 }} 
              initial={{ opacity : 0 }} 
              transition={{ delay: 0.3 }}
            >
              Home
            </motion.h1>
          </div>
        </section>
        <motion.a
          href="#"
          className="inline-flex items-center bg-myOrange font-Poppins font-semibold text-white py-3 px-10 rounded-lg hover:bg-orange-600 duration-100"
          animate={{ opacity : 100 }} 
          initial={{ opacity : 0 }} 
          transition={{ delay: 0.4 }}
        >
          Custom
        </motion.a>
      </div>
    );
  };
  
  export default HomeSection;
  