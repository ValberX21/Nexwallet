import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail, validateCPF, validateName, validatePassword, validatePasswordConfirmation, fetchAddressByCep } from '../../validations/registerValidations';
import { registerUser } from '../../services/registerUser';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

interface FormData {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
  cep: string;
  street: string;
  city: string;
}

interface Errors {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
  cep: string;
  street: string;
  city: string;
}

export const useRegisterEvents = () => {
    const navigate = useNavigate(); // Inicializar o useNavigate
    const [formData, setFormData] = useState<FormData>({
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

    const [errors, setErrors] = useState<Errors>({
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => {
            const newFormData = { ...prevFormData, [name]: inputValue };

            const newErrors = { ...errors };

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
                newErrors.confirmPassword = validatePasswordConfirmation(formData.password, value);
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
            try {
                // Remova a máscara do CPF antes de enviar
                const cleanCpf = formData.cpf.replace(/\D/g, '');

                // Hashing da senha usando SHA-256
                const hashedPassword = await sha256(formData.password);

                const response = await registerUser({ ...formData, cpf: cleanCpf, password: hashedPassword });
                if (response && response.success) { // Verificar a propriedade success
                    toast.success('Cadastro realizado com sucesso!');
                    navigate('/login'); // Redirecionar para a tela de login após sucesso
                    return true;
                } else {
                    toast.error('Erro ao cadastrar usuário. Por favor, verifique seus dados e tente novamente.');
                    return false;
                }
            } catch (error) {
                toast.error('Erro ao cadastrar usuário. Por favor, verifique seus dados e tente novamente.');
                console.error('Erro ao cadastrar usuário:', error);
                return false;
            }
        } else {
            toast.error('Por favor, corrija os erros no formulário antes de continuar.');
            return false;
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
