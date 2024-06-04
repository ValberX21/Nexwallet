export const registerUser = (userData: any) => {
  fetch('http://localhost:5086/GenerateToken/autentica', {
      method: 'POST',
      body: JSON.stringify({
          cpf: userData.cpf,
          email: userData.email,
          senha: userData.senha,
          nome: userData.nome,
          sobrE_NOME: userData.sobrE_NOME
      }),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  })
  .then(res => {
      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
  })
  .then(result => {
      alert(result);
      console.log(result);
      console.log("Dados enviados com sucesso!");
  })
  .catch(error => {
      alert(`Ops!, algo deu errado: ${error}`);
      console.error(error);
  });
};
