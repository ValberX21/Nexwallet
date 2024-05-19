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
            bool usuarioCadatrado = false;
            var jsonObject = new object();
            try
            {
                int checkSeUsuarioExiste = _cadUsuario.verificaUsuarioNaBase(usu);

                if (checkSeUsuarioExiste == 1)
                {
                    usuarioCadatrado = await _cadUsuario.inseriNovoUsuario(usu);
                    if (usuarioCadatrado)
                    {
                        jsonObject = new
                        {

                            success = true,
                            message = "Usuário cadastrado com sucesso!"
                        };
                        return jsonObject;
                    }
                }
                else if (checkSeUsuarioExiste == 2)
                {
                    jsonObject = new
                    {
                        success = false,
                        message = "Usuário já cadastrado"
                    };
                    return jsonObject;
                }

                else if (checkSeUsuarioExiste == 3)
                {
                    jsonObject = new
                    {
                        success = false,
                        message = "Erro ao cadastrar usuario no entity",
                    };
                    return jsonObject;
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
