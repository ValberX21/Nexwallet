import React, { useState } from 'react';
import { XMarkIcon, BellAlertIcon, BugAntIcon, UserPlusIcon, ChevronRightIcon, CurrencyDollarIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, IdentificationIcon, LockOpenIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';

interface MenuItem {
  id: number;
  text: string;
  link: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const HomeProfile: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    { id: 1, text: 'Área de Investimentos', link: '/opcao1', Icon: CurrencyDollarIcon },
    { id: 2, text: 'Central de Proteção', link: '/opcao2', Icon: ShieldCheckIcon },
    { id: 3, text: 'Configurar', link: '/opcao3', Icon: AdjustmentsHorizontalIcon },
    { id: 4, text: 'Documentos', link: '/opcao4', Icon: IdentificationIcon },
    { id: 5, text: 'Quero me tornar PJ', link: '/opcao4', Icon: LockOpenIcon },
    { id: 6, text: 'Fazer parte do time', link: '/opcao4', Icon: RocketLaunchIcon },
  ];

  const handleClick = (id: number): void => {
    setSelected(id);
    // Navegação futura pode ser implementada aqui, por exemplo, usando o react-router
  };

  return (
    <>
      <div className="flex justify-between items-center p-5 text-text-light">
        <XMarkIcon className="size-6" />
        <div className="flex">
          <BellAlertIcon className="size-6" />
          <BugAntIcon className="size-6 ml-8" />
        </div>
      </div>

      <div className="flex pl-5 items-center py-6">
        <div className="relative">
          <div className="bg-buttons-base rounded-full h-10 w-10 flex justify-center items-center">
            <UserPlusIcon className="size-6" />
          </div>
        </div>
        <div className="pl-5 font-poppins text-text-superLight">Danilo Martinez Belem</div>
      </div>

      <div className="font-inter flex flex-col justify-center items-center text-sm text-text-superLight">
        <h3 className="font-semibold text-text-light">Dados de conta</h3>
        <div className="pt-4 w-[90%]">
          <span>Agência 0000</span>
          <span className="px-1">•</span>
          <span className="">Conta 00000000-0</span>
          <span className="px-1">•</span>
          <span>Banco 0000</span>
          <span className="flex text-center justify-center items-center pt-1">
            NexWallet N.A - Instituição de Pagamento
            <DocumentDuplicateIcon className="size-5 ml-5" />
          </span>
        </div>
      </div>
      <hr className="my-5" />

      <ul>
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="relative cursor-pointer"
          >
            <div className={`p-4 ${selected === item.id ? ' bg-[#121212]' : 'bg-darkBackground'} transition-colors duration-300 rounded-md`}>
              <div className="flex justify-between items-center text-base font-inter text-text-lighter">
                <div className="flex items-center">
                  <item.Icon className="mr-3 h-10 w-6 flex items-center justify-center text-icons" />
                  {item.text}
                </div>
                <ChevronRightIcon className="h-6 w-6 text-icons" />
              </div>
            </div>
            {index < menuItems.length - 1 && (
              <hr className="absolute bottom-0 left-0 w-full border-t border-borders-base" />
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center pt-10">
        <button className="text-grayText-700 font-semibold font-inter text-lg w-80 bg-text-base rounded md:mr-10 p-3">
          Excluir conta
        </button>
      </div>
    </>
  );
};

export default HomeProfile;
