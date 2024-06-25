import React from 'react';

interface CpfInputProps {
  cpf: string;
  handleCpfChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CpfInput: React.FC<CpfInputProps> = ({ cpf, handleCpfChange }) => {
  return (
    <div className="p-3">
      <div className="uk-inline">
        <span className="uk-form-icon text-[#f97316]" style={{ color: '#f97316' }} data-uk-icon="icon: user"></span>
        <input
          className="uk-input border-light-500 rounded w-64 focus:border-orange-500 text-light-400"
          placeholder="CPF"
          type="text"
          id="cpf"
          name="cpf"
          value={cpf}
          maxLength={14}
          onChange={handleCpfChange}
          required
          aria-label="Not clickable icon"
        />
      </div>
    </div>
  );
}

export default CpfInput;
