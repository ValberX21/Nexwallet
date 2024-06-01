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
        public async Task<IActionResult> PostAsync([FromBody] Usuario usu)
        {
            try
            {
                //Verifica se usuario já esta cadastrado
                int checkSeUsuarioExiste = _cadUsuario.verificaUsuarioNaBase(usu);

                if(checkSeUsuarioExiste == 0)
                {
                    bool cadResult = await _cadUsuario.inseriNovoUsuario(usu);

                    if (cadResult)
                    {                       
                        return Ok("Usuario cadastrado com sucesso");
                    }
                    else
                    {
                       return StatusCode(500, "ERRO AO CADASTRAR USUARIO - ");
                    }
                   
                }

                if (checkSeUsuarioExiste == 1)
                {
                    return Conflict("Usuario ja cadastrado");
                }
                else
                {
                    return NoContent(); 
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "ERRO AO CADASTRAR USUARIO - " + ex.Message);
            }
        }
    }
}
