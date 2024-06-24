import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CreditCard() {
    const fullNumber = "1234 5678 9012 3456";
    const [displayedNumber, setDisplayedNumber] = useState("");

    const nome = localStorage.getItem('nome') || 'Usuário';
    const sobrenome = localStorage.getItem('sobrenome') || '';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedNumber(fullNumber.slice(0, index + 1));
            index = (index + 1) % (fullNumber.length + 1);
        }, 150); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center md:w-[50%] ">
            <div className="relative  p-8 rounded-xl  w-[95%] md:ml-[100%]">
                <div className="relative h-48 w-full md:ml-[28%] md:w-[45%]   rounded-lg overflow-hidden bg-gradient-to-r from-dark-100 via-dark-200 to-dark-300 p-4">
                    <div className="absolute inset-0 bg-opacity-70 bg-gray-900 rounded-lg flex flex-col justify-between p-4">
                        <motion.div
                            className="text-light-100 font-semibold font-mono text-lg overflow-hidden whitespace-nowrap"
                        >
                            {displayedNumber}
                        </motion.div>
                        <div>
                            <div className="text-light-200 font-semibold mt-2 font-mono">{`${nome} ${sobrenome}`}</div>
                            <div className="text-light-200 font-semibold  font-mono">12/25</div>
                        </div>
                    </div>
                </div>
            
            <motion.button 
                className="mt-8 bg-transparent md:w-[50%] md:ml-[25%] border-2 border-orange-500 text-light-200 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Criar Cartão
            </motion.button>
            </div>
        </div>
    );
}
