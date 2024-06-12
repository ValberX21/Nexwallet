// /src/ErrorScreen/ErrorScreen.tsx

import React from 'react';
import Meteors from "../Components/magicui/meteors";
import Satalite from '../assets/Satalite.png'
import Rocket from '../assets/Rocket.png'
const ErrorScreen: React.FC = () => {
    return (
        <>
            <div className="h-screen bg-black">
                <Meteors number={30} />
                <img src={Satalite} alt=""/>

                <div className="font-inter flex flex-col justify-center items-center">
                    <h2 className="text-text-lighter text-2xl text-center font-medium">Todos nos perdemos as vezes.</h2>
                    <h3 className="text-text-base text-center font-normal pt-2">Nossos servidores estão com problemas no momento. Por favor, volte mais tarde.</h3>
                </div>
                <img src={Rocket} alt="" />
            </div>
        </>
    );
};

export default ErrorScreen;
