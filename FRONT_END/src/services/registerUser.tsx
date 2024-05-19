export const registerUser = (userData: any) => {
    try {
      fetch('https://localhost:44390/GenerateToken/autentica',{
        method:'POST',       
        body: JSON.stringify({
                 cpf:'123.456.789-10',
                 email:userData.email,
                 senha:userData.senha,
        }),
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
          }
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        console.log(result)
    },(error)=>{
        alert(`Ops !, alguma coisa deu errado ${error}`);
        console.log(error.message);
    })
    }catch (errorData) {
      console.log(errorData);
  }
}