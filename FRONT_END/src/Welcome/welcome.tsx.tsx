import { Link } from 'react-router-dom';
import wifi from '../assets/testHome.png';



const Home = () => {
  return (
    <div className=" bg-darkBackground h-screen w-screen flex justify-center items-center flex-col p-10">
      {/* <img src={humanImg} /> */}
      <div className=" flex items-center justify-center w-[100%] p-2 ">
        <h1 className=" text-4xl text-left font-bold w-full font-inter tracking-wide text-text-superLight md:text-center">Ser <a className=" text-icons">NEX</a> é liderar o caminho para o futuro</h1>
      </div>
      <img src={wifi} alt="Descrição da imagem" className='loginImg md:w-[30%]' />

      <div className="  flex items-center justify-center flex-col">
        <h2 className=" text-xl text-text-light pb-10  ">Descomplique sua <a className="text-icons">vida financeira.</a></h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <Link to="/register">
          <button className=" text-text-black font-semibold font-inter text-lg w-80 bg-text-lighter rounded md:mr-10  p-3">QUERO SER NEX</button>
        </Link>
        <Link to="/login">
          <button className=" text-text-light font-normal font-inter text-lg w-80 border border-icons bg-[#121212]  rounded  p-3 mt-5 md:mt-0">JÁ TENHO CONTA</button>
        </Link>
        </div>

      </div>


    </div>
  );
};

export default Home;