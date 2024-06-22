import React from 'react';

interface PasswordInputProps {
  password: string;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, handlePasswordChange }) => {
  return (
    <div className="p-3">
      <div className="uk-inline">
        <span className="uk-form-icon" style={{ color: '#f97316' }} uk-icon="icon: lock"></span>
        <input
          className="uk-input border-light-500 rounded w-64 focus:border-orange-500 text-light-400"
          placeholder="Senha"
          type="password"
          id="password"
          name="password"  // <-- Certifique-se de que o name é "password"
          value={password}
          onChange={handlePasswordChange}
          required
          aria-label="Not clickable icon"
        />
      </div>
    </div>
  );
}

export default PasswordInput;
