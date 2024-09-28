
import HomeCardFunction from '../Components/Home/HomeCardFunctions';
import HomeHeader from '../Components/Home/HomeHeader.tsx';
import HomeCashModal from '../Components/Home/HomeCashModal.tsx';
import OverviewCard from '../Components/Home/Cards/OverviewCard.tsx';
import GraphCard from '../Components/Home/Cards/GraphCard.tsx';
import CreditCard from '../Components/Home/Cards/CreditCard.tsx';


export default function Home() {
    return (
        <>
            <div className=" bg-darkBackground  text-white font-inter p-5">
                <div className="p-5">
                    <HomeHeader />
                </div>
                <div className="pt-2">
                    <HomeCashModal />
                </div>
                <div className="px-5">
                    <HomeCardFunction />

                </div>
                <div className="">
                    <CreditCard />
                </div>
                <div className="pt-5 px-2 flex md:justify-center pb-5">
                    <OverviewCard />
                    <GraphCard />
                </div>
            </div>

        </>
    )
}