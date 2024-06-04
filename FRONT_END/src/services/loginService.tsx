import axios from 'axios';

interface LoginData {
  cpf: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export const loginUser = async (loginData: LoginData): Promise<string | null> => {
  try {
    const response = await axios.post<AuthResponse>('https://localhost:5086/GenerateToken/autentica', loginData);
    const { token } = response.data;
    // Salve o token no localStorage ou em cookies para uso posterior
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
};