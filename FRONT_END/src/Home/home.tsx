import { Link } from 'react-router-dom';
import HomeProfile from '../Components/Home/HomeProfile';
import { UserPlusIcon, CubeTransparentIcon} from '@heroicons/react/24/outline';
import Aang from '../assets/aang.jpg'
import credit from '../assets/credit.png'
import HomeCardFunction from '../Components/Home/HomeCardFunctions';


export default function Home() {
    return (
        <>
            <div className=" bg-darkBackground h-screen text-white font-inter">
                <div className="p-5">
                    <div className="pt-5 flex justify-around items-center">
                        <div className="bg-[#242424] rounded-full h-12 w-12 flex justify-center items-center">
                            <UserPlusIcon className="size-6" />
                        </div>
                        <div className="bg-[#242424] rounded-full h-12 w-12 flex justify-center items-center">
                            <UserPlusIcon className="size-6" />
                        </div>
                        <div className="flex border-2 rounded-full p-1 pl-8 border-borders-base bg-[#242424]">
                            <div className="  flex-col flex text-right text-sm font-medium">
                                <h2 className=" text-text-base">Bem vindo </h2>
                                <h2>Danilo Martinez</h2>
                            </div>
                            <div className="pl-2"><img src={Aang} alt="Avatar" className="rounded-full w-10 h-10"/></div>
                        </div>
                    </div>
                    {/* <HomeProfile /> */}
                    <div className="">
                    <img src={credit} alt="" className="pt-10"/>
                    <HomeCardFunction />

                    </div>
                    
                </div>
            </div>

        </>
    )
}