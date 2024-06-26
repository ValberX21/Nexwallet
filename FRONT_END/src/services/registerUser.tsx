interface UserData {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  cpf: string;
}

interface RegisterUserResponse {
  success: boolean;
  message: string;
  // Adicione outras propriedades que a resposta da API possa ter
}

export const registerUser = async (userData: UserData): Promise<RegisterUserResponse> => {
  try {
      console.log("Enviando dados para registro:", userData);

      const response = await fetch('https://bankinapi20240623181422.azurewebsites.net/CadUsuario/adicionaNovoUsuario', {
          method: 'POST',
          body: JSON.stringify({
              iD_USUARIO: 0,
              nome: userData.firstName,
              sobrE_NOME: userData.lastName,
              senha: userData.password,
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

      const result: RegisterUserResponse = await response.json();
      console.log("Dados enviados com sucesso!", result);
      return result;
  } catch (error) {
      console.error('Erro ao tentar registrar usuário:', error);
      throw error;
  }
};
