import { motion } from 'framer-motion';
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

export default function OverviewCard() {
    return (
        <>
            <motion.div 
                className="flex flex-col bg-[#262626] rounded-3xl shadow-card w-44"
                whileTap={{ scale: 0.95 }}
            >
                <div className="p-4">
                    <div className="flex items-center mb-4">
                        <div className="bg-[#373737] rounded-full h-10 w-10 flex justify-center items-center shadow-md">
                            <ArrowPathRoundedSquareIcon className="h-5 w-5 text-orange-400" />
                        </div>
                        <div className="ml-4 text-white text-lg font-semibold">Resumo</div>
                    </div>
                    <div className="text-gray-400 text-sm font-medium">
                        <div className="flex items-center justify-between">Cinema: <p className="pl-3 text-red-400">R$ -60,00</p></div>
                        <div className="flex items-center justify-between">Pix: <p className="pl-3 text-green-400">R$ 240,00</p></div>
                    </div>
                </div>
                <div className="bg-orange-400 rounded-b-3xl">
                    <div className="flex text-center items-center justify-center p-4 text-dark-200 font-semibold">
                        Ver Resumo
                    </div>
                </div>
            </motion.div>
        </>
    );
}
