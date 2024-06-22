interface LoginData {
  cpf: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export const loginUser = async (loginData: LoginData): Promise<string | null> => {
  try {
    console.log('Enviando dados de login:', loginData); // Log para depuração

    const response = await fetch('http://localhost:5086/GenerateToken/autentica', {
      method: 'POST',
      body: JSON.stringify({
        iD_USUARIO: 0,
        nome: "", // Adicione um valor adequado ou remova se não for necessário
        sobrE_NOME: "", // Adicione um valor adequado ou remova se não for necessário
        senha: loginData.password, // Use diretamente a senha fornecida em loginData
        email: "", // Adicione um valor adequado ou remova se não for necessário
        saldo: 0,
        token: "",
        cpf: loginData.cpf,
        usu: loginData.cpf // Inclui o campo `usu`
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log('Resposta recebida:', response); // Log para depuração

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro na resposta do servidor:', errorData);
      throw new Error(`HTTP error! Status: ${response.status}, Errors: ${JSON.stringify(errorData.errors)}`);
    }

    const result: AuthResponse = await response.json();
    console.log('Resultado do login:', result); // Log para depuração
    localStorage.setItem('token', result.token);
    return result.token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
};