import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail, validateCPF, validateFullName, validatePassword, validatePasswordConfirmation, fetchAddressByCep } from '../../validations/registerValidations';

export const useRegisterEvents = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: '',
        cep: '',
        street: '',
        city: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: '',
        cep: '',
        street: '',
        city: '',
    });

    const [formComplete, setFormComplete] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData, [name]: inputValue };

            // Adicionando logs para depuração
            console.log("Input changed: ", name, value);
            console.log("Form data: ", newFormData);

            let newErrors = { ...errors };

            if (name === 'email') {
                newErrors.email = validateEmail(value);
            } else if (name === 'cpf') {
                newErrors.cpf = validateCPF(value);
            } else if (name === 'fullName') {
                newErrors.fullName = validateFullName(value);
            } else if (name === 'password') {
                newErrors.password = validatePassword(value);
                newErrors.confirmPassword = validatePasswordConfirmation(value, newFormData.confirmPassword); // Verificar a confirmação de senha ao alterar a senha
                console.log("Password validation error: ", newErrors.password);
            } else if (name === 'confirmPassword') {
                newErrors.confirmPassword = validatePasswordConfirmation(newFormData.password, value); // Verificar a confirmação de senha ao alterar a confirmação de senha
                console.log("Confirm Password validation error: ", newErrors.confirmPassword);
            } else if (name === 'cep') {
                if (value.length === 8) {
                    fetchAddressByCep(value).then((address) => {
                        if (address) {
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                street: address.street,
                                city: address.city,
                            }));
                        }
                    });
                }
            }

            setErrors(newErrors);

            return newFormData;
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(errors).every(error => error === '')) {
            setFormComplete(true);
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Dados salvos na localStorage:', formData);

            try {
                // await registerUser(formData);
                toast.success('Cadastro realizado com sucesso!');
            } catch (error) {
                toast.error('Erro ao cadastrar usuário. Por favor, verifique seus dados e tente novamente.');
            }
        } else {
            toast.error('Por favor, corrija os erros no formulário antes de continuar.');
        }
    };

    return { formData, errors, formComplete, handleInputChange, handleSubmit };
};
