import React from 'react';
import { Link } from 'react-router-dom';
import fillBox from '../../assets/fillBox.png';
import CpfInput from '../../Components/cpfInput';  
import PasswordInput from '../../Components/passwordInput';
import { useLoginEvents } from '../../events/formEvents/loginEvents';

const Login: React.FC = () => {
    const { formData, errors, handleInputChange, handleSubmit } = useLoginEvents();
  
    return (
      <div className="bg-darkBackground h-screen w-screen flex justify-center items-center flex-col font-inter">
        <img src={fillBox} alt="Descrição da imagem" className='loginImg md:w-[20%]' />
  
        <div className="flex items-center justify-center flex-col">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="p-10">
                <CpfInput cpf={formData.cpf} handleCpfChange={handleInputChange} />
                {errors.cpf && <p className="text-red-500">{errors.cpf}</p>}
                <PasswordInput password={formData.password} handlePasswordChange={handleInputChange} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <button className="text-black font-semibold font-inter text-lg w-64 bg-light-200 rounded p-2" type="submit">LOGIN</button>
                <h3 className="pt-3 text-light-400">Esqueceu a senha? <Link to="/cadastro" className="text-orange-500">Nova senha</Link></h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;