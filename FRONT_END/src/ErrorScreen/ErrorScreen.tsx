// /src/ErrorScreen/ErrorScreen.tsx
import React from 'react';
import Meteors from "../Components/magicui/meteors";
import Satalite from '../assets/Satalite.png'
import Rocket from '../assets/Rocket.png'
const ErrorScreen: React.FC = () => {
    return (
        <>
            <div className="h-screen bg-black md:flex md:flex-col md:justify-center md:items-center">
                <Meteors number={30} />
                <img src={Satalite} alt="" className="  md:w-[30%]"/>

                <div className="font-inter flex flex-col justify-center items-center text-light-100">
                    <h2 className="text-text-lighter text-2xl text-center font-medium">Todos nos perdemos as vezes.</h2>
                    <h3 className="text-text-base text-center font-normal pt-2 text-light-500">Você terá acesso a essa funcionalidade em breve, continue acompanhando!</h3>
                </div>
                <img src={Rocket} alt="" className="md:w-[20%]"/>
            </div>
        </>
    );
};

export default ErrorScreen;
