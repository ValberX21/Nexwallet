import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/index.css';
import unfillBox from '../../assets/unfillBox.png';
import { useRegisterEvents } from '../../events/formEvents/registerEvents';
import { validateEmail, validateCPF, validateName, validatePassword, validatePasswordConfirmation, formatCPF } from '../../validations/registerValidations';

const Register: React.FC = () => {
    const { formData, errors, handleInputChange, handleSubmit } = useRegisterEvents();
    const [showSecondForm, setShowSecondForm] = useState(false);
    const navigate = useNavigate();

    const toggleSecondForm = () => {
        const isValid = validateForm();
        if (isValid) {
            setShowSecondForm(!showSecondForm);
            document.getElementById('secondForm')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Por favor, preencha todos os campos corretamente antes de continuar.');
        }
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {
            firstName: validateName(formData.firstName),
            lastName: validateName(formData.lastName),
            cpf: validateCPF(formData.cpf),
            email: validateEmail(formData.email),
            password: validatePassword(formData.password),
            confirmPassword: validatePasswordConfirmation(formData.password, formData.confirmPassword),
            cep: '',
            street: '',
            city: '',
        };

        return Object.values(newErrors).every(error => error === '');
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const result = await handleSubmit(e);
            if (result) {
                navigate('/login');
            }
        } else {
            alert('Por favor, corrija os erros no formulário antes de continuar.');
        }
    };

    return (
        <div className="bg-[#171717] flex  justify-center items-center flex-col font-inter">
            <img src={unfillBox} alt="Descrição da imagem" className="w-[80%] md:w-[14%]" />
            <div className="p-6 w-80 text-light-300 flex flex-col justify-center items-center">
                <form onSubmit={handleFormSubmit}>
                    {!showSecondForm && (
                        <>
                            <div className="py-3">
                                <div className="uk-inline">
                                    <input
                                        placeholder="Nome"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    />
                                    {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="uk-inline">
                                    <input
                                        placeholder="Sobrenome"
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    />
                                    {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="py-3">
                                <input
                                    placeholder="CPF:"
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    value={formatCPF(formData.cpf)}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.cpf && <p className="text-red-500">{errors.cpf}</p>}
                            </div>
                            <div className="py-3">
                                <input
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    placeholder="E-mail:"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                            <div className="py-3">
                                <input
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    placeholder="Nova senha:"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                            <div className="py-3">
                                <input
                                    placeholder="Confirme a senha:"
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                            </div>
                            <div className="flex flex-col justify-center items-center pt-5">
                                <button
                                    className="text-black font-semibold font-inter text-lg w-64 bg-light-200 rounded p-2"
                                    type="button"
                                    onClick={toggleSecondForm}
                                >
                                    CONTINUAR
                                </button>
                                <h3 className="pt-1 text-text-light">
                                    Já é cadastrado? <Link to="/login" className="text-orange-500">Faça login</Link>
                                </h3>
                            </div>
                        </>
                    )}

                    {showSecondForm && (
                        <div className="teste" id="secondForm">
                            <div className="py-3">
                                <input
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    placeholder="CEP"
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    value={formData.cep}
                                    onChange={handleInputChange}
                                    maxLength={8}
                                />
                                {errors.cep && <p className="text-red-500">{errors.cep}</p>}
                            </div>
                            <div className="py-3">
                                <input
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    placeholder="Rua"
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="py-3">
                                <input
                                    className="uk-input border-light-500 rounded w-64 focus:border-orange-400 text-light-300"
                                    placeholder="Cidade"
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center pt-5">
                                <button
                                    className="text-black font-semibold font-inter text-lg w-64 bg-light-200 rounded p-2"
                                    type="submit"
                                >
                                    CRIAR CONTA
                                </button>
                                <h3 className="pt-10  text-light-200">
                                    Já é cadastrado? <Link to="/login" className="text-orange-500">Faça login</Link>
                                </h3>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
