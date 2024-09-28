import React, { useState } from 'react';
import { validateCPF } from '../../validations/registerValidations';
import { loginUser } from '../../services/loginService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const useLoginEvents = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    cpf: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      let newValue = value;
      const newErrors = { ...errors };

      if (name === 'cpf') {
        newValue = formatCPF(value);
        newErrors.cpf = validateCPF(newValue);
      }

      const newFormData = { ...prevFormData, [name]: newValue };
      setErrors(newErrors);

      return newFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(errors).every((error) => error === '')) {
      try {
        console.log('Formulário enviado com os dados:', formData); // Log para depuração

        // Remova a máscara do CPF antes de enviar
        const cleanCpf = removeCpfMask(formData.cpf);

        // Hashing da senha usando SHA-256
        const hashedPassword = await sha256(formData.password);

        // Chame a função de login com o CPF limpo e a senha hash
        const token = await loginUser({ ...formData, cpf: cleanCpf, password: hashedPassword });

        if (token) {
          toast.success('Login realizado com sucesso!');
          navigate('/home'); // Redireciona para a tela de home
        } else {
          toast.error('Erro ao fazer login. Por favor, verifique seus dados e tente novamente.');
        }
      } catch (error) {
        toast.error('Erro ao fazer login. Por favor, verifique seus dados e tente novamente.');
        console.error('Erro ao fazer login:', error);
      }
    } else {
      toast.error('Por favor, corrija os erros no formulário antes de continuar.');
    }
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

// Função para hash de senha usando SHA-256
async function sha256(message: string) {
  // Converte a mensagem para array de bytes (UTF-8)
  const msgBuffer = new TextEncoder().encode(message);

  // Hashing da mensagem usando SHA-256
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // Converte o buffer hash para uma string hexadecimal
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

// Função para formatar o CPF
function formatCPF(cpf: string) {
  // Remove todos os caracteres não numéricos
  cpf = cpf.replace(/\D/g, '');

  // Adiciona a formatação do CPF
  if (cpf.length > 3) {
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  }
  if (cpf.length > 6) {
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  }
  if (cpf.length > 9) {
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return cpf;
}

// Função para remover a máscara do CPF
function removeCpfMask(cpf: string) {
  return cpf.replace(/\D/g, '');
}
