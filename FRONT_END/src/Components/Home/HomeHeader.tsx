import { UserPlusIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Aang from '../../assets/aang.jpg';

export default function HomeHeader() {
  const nome = localStorage.getItem('nome') || 'Usuário';
  const sobrenome = localStorage.getItem('sobrenome') || '';

  return (
    <>
      <div className="pt-5 flex justify-around items-center">
        <div className=" bg-dark-200 rounded-full h-12 w-12 flex justify-center items-center">
          <ArrowTopRightOnSquareIcon className="h-6 w-6 text-orange-400" />
        </div>
        <div className="bg-dark-200 rounded-full h-12 w-12 flex justify-center items-center">
          <UserPlusIcon className="h-6 w-6 text-orange-400" />
        </div>
        <div className="flex border-2 rounded-full p-1 pl-8 border-dark-300 bg-dark-200">
          <div className="flex flex-col text-right text-sm font-medium">
            <h2 className="text-light-400">Bem vindo</h2>
            <h2 className="text-light-100">{`${nome} ${sobrenome}`}</h2>
          </div>
          <div className="pl-2">
            <img src={Aang} alt="Avatar" className="rounded-full w-10 h-10" />
          </div>
        </div>
      </div>
    </>
  );
}
