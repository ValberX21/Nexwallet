using bankinapi.Models;
using bankinapi.Models.Dto;
using bankinapi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace bankinapi.GenerateTokenController
{
    [Route("[controller]")]
    [ApiController]
    public class GenerateTokenController : ControllerBase
    {
        protected ResponseDto _response;
        private readonly IConfiguration _configuration;
        private CheckUsuarioTokenRepository _usuarioToken;

        public GenerateTokenController(CheckUsuarioTokenRepository checkUsuarioToken, IConfiguration configuration)
        {
            _usuarioToken = checkUsuarioToken;
            this._response = new ResponseDto();
            _configuration = configuration;
        }

        [HttpPost]
        [Route("autentica")]
        public async Task<object> Post([FromBody] Usuario usu)
        {
            try
            {
                Usuario userDt = await _usuarioToken.SelecionaUsuarioo(usu);
                _response.Result = userDt;
                var theToken = geraToken(userDt);
                _response.Token = theToken;
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessage
                = new List<string>() { ex.ToString() };
            }
            return _response;
        }

        private string geraToken(Usuario usuDto)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetSection("Secret").ToString());
            var tokenDescription = new SecurityTokenDescriptor();

            try
            {
                tokenDescription = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                           {
                new Claim(ClaimTypes.Name,usuDto.NOME.ToString(),
                          ClaimTypes.Hash,usuDto.SENHA.ToString()
                         )
                           }),
                    Expires = DateTime.UtcNow.AddHours(24),
                    SigningCredentials =
                           new SigningCredentials(
                               new SymmetricSecurityKey(key),
                               SecurityAlgorithms.HmacSha256Signature)

                };
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }


            var finalToken = tokenHandler.CreateToken(tokenDescription);
            return tokenHandler.WriteToken(finalToken);
        }
    }
}




