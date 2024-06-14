import React from 'react';
import { TbCreditCardPay, TbCreditCardRefund, TbCreditCardOff, TbCreditCard   } from "react-icons/tb";


interface IconCard {
  text: string;
  icon: React.ReactNode;
  link: string;
}

const iconCards: IconCard[] = [
  { text: 'Depósito', icon: <TbCreditCardPay />, link: '/pay' },
  { text: 'Transferência', icon: <TbCreditCardRefund />, link: '/refund' },
  { text: 'Pix', icon: <TbCreditCard  />, link: '/pix' },
  { text: 'Outros', icon: <TbCreditCardOff  />, link: '/other' }, // Ajuste conforme necessário para o quarto ícone
];

export default function HomeCardFunction() {
  return (
    <div className="flex justify-between items-center p-2 px-4 border border-borders-base bg-[#242424] rounded-2xl mt-5 shadow-lg">
      {iconCards.map((card, index) => (
        <a key={index} href={card.link} className="flex flex-col justify-center items-center text-center">
          <span className="text-2xl text-icons">{card.icon}</span>
          <span className="text-xs pt-2 text-text-light">{card.text}</span>
        </a>
      ))}
    </div>
  );
}
