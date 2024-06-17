import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fillBox from '../../assets/fillBox.png';
import CpfInput from '../../Components/cpfInput';  
import PasswordInput from '../../Components/passwordInput';
import { registerUser } from '../../services/registerUser';
import { validateCPF, formatCPF } from '../../validations/registerValidations';

const Login: React.FC = () => {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [cpfError, setCpfError] = useState('');

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const formattedCPF = formatCPF(value); 
        setCpf(formattedCPF);

        // Validação do CPF
        const error = validateCPF(formattedCPF);
        setCpfError(error);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const error = validateCPF(cpf);
        if (error) {
            setCpfError(error);
            return;
        }

        console.log('CPF:', cpf);
        console.log('Senha:', password);   
        
        const userData = {
            cpf,
            password,           
        };      
        registerUser(userData);             
    };

    return (
        <div className=" bg-darkBackground h-screen w-screen flex justify-center items-center flex-col font-inter">
            <img src={fillBox} alt="Descrição da imagem" className='loginImg md:w-[20%]'  />

            <div className=" flex items-center justify-center flex-col ">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className=" p-10  ">
                            <CpfInput cpf={cpf} handleCpfChange={handleCpfChange} />
                            {cpfError && <p className="text-red-500">{cpfError}</p>} 
                            <PasswordInput password={password} handlePasswordChange={handlePasswordChange} />
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <button className=" text-black font-semibold font-inter text-lg w-64 bg-light-200  rounded  p-2" type="submit">LOGIN</button>
                            <h3 className="pt-3 text-light-400">Esqueceu a senha? <Link to="/cadastro" className=" text-orange-500">Nova senha</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
