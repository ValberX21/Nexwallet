import { Link } from 'react-router-dom';
import HomeProfile from '../Components/Home/HomeProfile';

export default function Home() {
    return (
        <>
        <div className=" bg-darkBackground h-screen">
            <div className="">
                <HomeProfile />
            </div>
        </div>
        
        </>
    )
}