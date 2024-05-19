import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fillBox from '../../assets/fillBox.png';
import EmailInput from '../../Components/emailInput';
import PasswordInput from '../../Components/passwordInput';
import { registerUser } from '../../services/registerUser';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Senha:', password);   
        
        var userData = {
            email,
            password,
            cpf:'123.456.789-10'            
        }      
        registerUser(userData);             
    };

    return (
        <div className="bg-[#171717] h-screen w-screen flex justify-center items-center flex-col font-inter">
            <img src={fillBox} alt="Descrição da imagem" className='loginImg' />

            <div className=" flex items-center justify-center flex-col ">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className=" p-10  ">
                        <EmailInput email={email} handleEmailChange={handleEmailChange} />
                        <PasswordInput password={password} handlePasswordChange={handlePasswordChange} />
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                        <button className=" text-grayText-700 font-semibold font-inter text-lg w-64 bg-grayText-50  rounded  p-2" type="submit">LOGIN</button>
                            <h3 className="pt-3 text-grayText-300">Esqueceu a senha? <Link to="/cadastro" className=" text-orangeGrid-500">Nova senha</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;

