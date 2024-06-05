

export const registerUser = async (userData: any) => {
    try {
        console.log("Enviando dados para registro:", userData);
        


        const response = await fetch('http://localhost:5086/CadUsuario/adicionaNovoUsuario', {
            method: 'POST',
            body: JSON.stringify({
                iD_USUARIO: 0,
                nome: userData.firstName,
                sobrE_NOME: userData.lastName,
                senha: userData.password, // Use diretamente a senha fornecida em userData
                email: userData.email,
                saldo: 0,
                token: "",
                cpf: userData.cpf
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro na resposta do servidor:', errorData);
            throw new Error(`HTTP error! Status: ${response.status}, Errors: ${JSON.stringify(errorData.errors)}`);
        }

        const result = await response.json();
        console.log("Dados enviados com sucesso!", result);
        return result;
    } catch (error) {
        console.error('Erro ao tentar registrar usuário:', error);
        throw error;
    }
};
