export const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Email inválido';
};

export const validateCPF = (cpf: string): string => {
    const formattedValue = cpf.replace(/\D/g, '');

    //if (formattedValue.length !== 11) return 'CPF inválido';

    const cpfNumbers = formattedValue.substring(0, 9);
    const cpfDigits = formattedValue.substring(9);
    const cpfArray = Array.from(cpfNumbers);

    let sum = 0;
    let counter = 10;

    cpfArray.forEach(digit => {
        sum += parseInt(digit) * counter;
        counter--;
    });

    const remainder = sum % 11;
    const firstDigit = remainder < 2 ? 0 : 11 - remainder;

    //if (parseInt(cpfDigits[0]) !== firstDigit) return 'CPF inválido';

    sum = 0;
    counter = 11;
    cpfArray.push(firstDigit.toString());

    cpfArray.forEach(digit => {
        sum += parseInt(digit) * counter;
        counter--;
    });

    const secondRemainder = sum % 11;
    const secondDigit = secondRemainder < 2 ? 0 : 11 - secondRemainder;

    //if (parseInt(cpfDigits[1]) !== secondDigit) return 'CPF inválido';

    return '';
};

export const formatCPF = (cpf: string): string => {
    return cpf
        .replace(/\D/g, '')
        .slice(0, 11)  // Limite de 11 caracteres
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const validateName = (name: string): string => {
    return name.length >= 3 ? '' : 'Nome deve conter pelo menos 3 caracteres';
};

export const validatePassword = (password: string): string => {
    if (password.length === 0) return 'Campo obrigatório';

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password) ? '' : 'A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas e um caractere especial';
};

export const validatePasswordConfirmation = (password: string, confirmPassword: string): string => {
    if (confirmPassword.length === 0) return 'Campo obrigatório';

    return password === confirmPassword ? '' : 'As senhas não coincidem';
};

export const fetchAddressByCep = async (cep: string): Promise<{ street: string; city: string } | undefined> => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return { street: data.logradouro || '', city: data.localidade || '' };
    } catch (error) {
        console.error('Erro ao buscar endereço pelo CEP:', error);
        return undefined;
    }
};
