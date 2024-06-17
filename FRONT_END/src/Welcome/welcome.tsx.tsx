import { Link } from 'react-router-dom';
import wifi from '../assets/testHome.png';



const Home = () => {
  return (
    <div className="bg-custom-gradient bg-cover bg-center">
    <div className=" bg-darkBackground h-screen w-screen flex justify-center items-center flex-col p-10">
      {/* <img src={humanImg} /> */}
      <div className=" flex items-center justify-center w-[100%] p-2 ">
        <h1 className=" text-5xl text-left font-bold w-full  tracking-wide text-light-200 md:text-center ">Ser <a className=" text-orange-500 text-icons">NEX</a> é liderar o caminho</h1>
      </div>
      <img src={wifi} alt="Descrição da imagem" className='loginImg md:w-[30%]' />

      <div className="  flex items-center justify-center flex-col">
        <h2 className=" text-xl text-light-300 pb-10  ">Descomplique sua <a className="text-icons">vida financeira.</a></h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <Link to="/register">
          <button className=" text-text-black font-semibold font-inter text-lg w-80 bg-light-200 rounded md:mr-10  p-3">QUERO SER NEX</button>
        </Link>
        <Link to="/login">
          <button className=" text-orange-500 font-semibold font-inter text-lg w-80 border border-orange-500 bg-dark-50  rounded  p-3 mt-5 md:mt-0">JÁ TENHO CONTA</button>
        </Link>
        </div>

      </div>


    </div>
    </div>

  );
};

export default Home;