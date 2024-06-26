interface LoginData {
  cpf: string;
  password: string;
}

interface AuthResponse {
  token: string;
  isSuccess: boolean;
  result: {
    iD_USUARIO: number;
    nome: string;
    sobrE_NOME: string;
    senha: string;
    email: string;
    saldo: number;
  };
  displayMessage: string;
  errorMessage: string[] | null;
}

export const loginUser = async (loginData: LoginData): Promise<string | null> => {
  try {
    console.log('Enviando dados de login:', loginData);

    const response = await fetch('https://bankinapi20240623181422.azurewebsites.net/GenerateToken/autentica', {
      method: 'POST',
      body: JSON.stringify({
        iD_USUARIO: 0,
        nome: "",
        sobrE_NOME: "",
        senha: loginData.password,
        email: "",
        saldo: 0,
        token: "",
        cpf: loginData.cpf,
        usu: loginData.cpf
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

    const result: AuthResponse = await response.json();
    console.log('Resultado do login:', result); // Log para depuração

    if (!result.isSuccess) {
      console.error('Erro no login:', result.displayMessage);
      return null;
    }

    // Armazene o token e os dados do usuário no localStorage
    localStorage.setItem('token', result.token);
    localStorage.setItem('nome', result.result.nome);
    localStorage.setItem('sobrenome', result.result.sobrE_NOME);
    localStorage.setItem('saldo', result.result.saldo.toString());

    return result.token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
};
