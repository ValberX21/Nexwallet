import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import newBackground from '../assets/testePerson.jpg';
import logo from '../assets/nexLogo.png'; // Atualize este caminho conforme necessário

const Home = () => {
  return (
    <div className="relative bg-cover bg-center h-screen w-screen" style={{ backgroundImage: `url(${newBackground})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full w-full p-10 flex flex-col justify-center items-center md:items-start md:justify-start">
        <motion.img 
          src={logo} 
          alt="NEX Logo" 
          className="w-20 h-20 mb-5 md:mb-0 md:absolute md:top-10 md:left-10" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="flex flex-col justify-center items-center text-center mt-20 md:mt-0 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl font-bold tracking-wide text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Bem-vindo à <span className="text-orange-500">NEX</span>
          </motion.h1>
          <motion.p 
            className="text-2xl text-light-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Simplifique sua <span className="text-orange-500">vida financeira</span> com soluções inovadoras.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row md:space-x-5 w-full md:justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/register">
              <button className="text-black font-semibold text-lg w-full md:w-40 bg-light-200 rounded p-3 mb-3 md:mb-0 hover:bg-light-300 transition duration-300 shadow-lg hover:shadow-xl">
                Cadastre-se
              </button>
            </Link>
            <Link to="/login">
              <button className="text-orange-500 font-semibold text-lg w-full md:w-40 border border-orange-500 bg-transparent rounded p-3 hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg hover:shadow-xl">
                Entrar
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
