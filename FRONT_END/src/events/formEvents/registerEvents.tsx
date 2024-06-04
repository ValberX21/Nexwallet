import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail, validateCPF, validateName, validatePassword, validatePasswordConfirmation, fetchAddressByCep } from '../../validations/registerValidations';

export const useRegisterEvents = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: '',
        cep: '',
        street: '',
        city: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
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

            let newErrors = { ...errors };

            if (name === 'email') {
                newErrors.email = validateEmail(value);
            } else if (name === 'cpf') {
                newErrors.cpf = validateCPF(value);
            } else if (name === 'firstName') {
                newErrors.firstName = validateName(value);
            } else if (name === 'lastName') {
                newErrors.lastName = validateName(value);
            } else if (name === 'password') {
                newErrors.password = validatePassword(value);
                newErrors.confirmPassword = validatePasswordConfirmation(value, newFormData.confirmPassword);
            } else if (name === 'confirmPassword') {
                newErrors.confirmPassword = validatePasswordConfirmation(newFormData.password, value);
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
