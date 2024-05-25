using bankinapi.Models;
using bankinapi.Models.Dto;
using bankinapi.Repository;
using Microsoft.AspNetCore.Mvc;

namespace bankinapi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CadUsuarioController : ControllerBase
    {
        protected ResponseDto _response;
        private readonly IConfiguration _configuration;
        private CadastroUsuarioRepository _cadUsuario;

        public CadUsuarioController(CadastroUsuarioRepository cadUsuario, IConfiguration configuration)
        {
            _cadUsuario = cadUsuario;
            this._response = new ResponseDto();
            _configuration = configuration;
        }

        [HttpPost]
        [Route("adicionaNovoUsuario")]
        public async Task<object> PostAsync([FromBody] Usuario usu)
        {
            var jsonObject = new object();

            try
            {
                //Verifica se usuario já esta cadastrado
                int checkSeUsuarioExiste = _cadUsuario.verificaUsuarioNaBase(usu);

                if(checkSeUsuarioExiste == 0)
                {
                    bool cadResult = await _cadUsuario.inseriNovoUsuario(usu);

                    if (cadResult)
                    {
                        jsonObject = new
                        {
                            success = true,
                            message = "Usuario cadastrado com sucesso"
                        };
                    }
                    else
                    {
                        jsonObject = new
                        {
                            success = false,
                            message = "Erro ao cadastrar usuario"
                        };
                    }
                   
                }

                if (checkSeUsuarioExiste == 1)
                {
                    jsonObject = new
                    {
                        success = false,
                        message = "Usuario ja cadastrado"
                    };
                }
                return jsonObject;
            }
            catch (Exception ex)
            {
                jsonObject = new
                {
                    success = false,
                    message = "ERRO AO CADASTRAR USUARIO - " + ex.Message
                };
                return jsonObject;
            }
        }
    }
}
