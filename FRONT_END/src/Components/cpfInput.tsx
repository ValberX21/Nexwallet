import React from 'react';

interface CpfInputProps {
  cpf: string;
  handleCpfChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CpfInput: React.FC<CpfInputProps> = ({ cpf, handleCpfChange }) => {
  return (
    <div className="p-3">
      <div className="uk-inline">
        <span className="uk-form-icon text-[#f97316]" style={{ color: '#f97316' }} uk-icon="icon: user"></span>
        <input
          className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500 text-grayText-200"
          placeholder="CPF"
          type="text"
          id="cpf"
          value={cpf}
          onChange={handleCpfChange}
          required
          aria-label="Not clickable icon"
        />
      </div>
    </div>
  );
}

export default CpfInput;
