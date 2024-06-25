import React from 'react';
import { TbCreditCardPay, TbCreditCardRefund, TbCreditCard } from "react-icons/tb";
import { HiOutlineCog } from "react-icons/hi";

interface IconCard {
  text: string;
  icon: React.ReactNode;
  link: string;
}

const iconCards: IconCard[] = [
  { text: 'Depósito', icon: <TbCreditCardPay className="text-orange-500" />, link: '/maintenance' },
  { text: 'Transferência', icon: <TbCreditCardRefund className="text-orange-500" />, link: '/maintenance' },
  { text: 'Pix', icon: <TbCreditCard className="text-orange-500" />, link: '/maintenance' },
  { text: 'Minha conta', icon: <HiOutlineCog className="text-orange-500" />, link: '/maintenance' },
];

export default function HomeCardFunction() {
  return (
    <div className="flex justify-between items-center p-2 px-4 border border-orange-500 bg-[#242424] rounded-2xl mt-5 shadow-lg md:w-[50%] md:ml-[25%]">
      {iconCards.map((card, index) => (
        <a key={index} href={card.link} className="flex flex-col justify-center items-center text-center">
          <span className="text-2xl text-icons">{card.icon}</span>
          <span className="text-xs pt-2 text-text-light">{card.text}</span>
        </a>
      ))}
    </div>
  );
}
