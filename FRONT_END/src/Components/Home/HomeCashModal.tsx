import React from 'react';
import { EyeIcon, EyeSlashIcon, ChevronRightIcon} from '@heroicons/react/24/outline';

    const HomeCashModal: React.FC = () => {

    return (
        <>
            <div className="bg-dark-200 font-inter">
                <div className="p-5">
                    <div className="flex items-center justify-between ">
                    <h2 className="font-normal text-lg text-light-300">Conta:</h2>
                    <div className="flex">
                    < EyeIcon  className=" w-5 h-5 mr-8 text-orange-400"/>
                    < ChevronRightIcon className="w-5 h-5 text-orange-400"/>
                    </div>

                    </div>
                    <h2 className=" font-mono pl-1 pt-3 text-4xl">R$ 125,435.000</h2>
                </div>
            </div>
        </>
    );
}

export default HomeCashModal;