using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using bankinapi.Models.Dto;

namespace bankinapi.Token
{
    public class GenerateToken
    {
        private readonly string _issuer;
        private readonly string _audience;
        private readonly string _signingKey;
        private readonly int _accessTokenExpirationMinutes;
        private readonly int _refreshTokenExpirationMinutes;

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public GenerateToken(string issuer, string audience, int accessTokenExpirationMinutes, int refreshTokenExpirationMinutes)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
                _issuer = issuer;
                _audience = audience;               
                _accessTokenExpirationMinutes = accessTokenExpirationMinutes;
                _refreshTokenExpirationMinutes = refreshTokenExpirationMinutes;
        }

        public ResponseDto GenerateTokens(string userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            //var key = Convert.FromBase64String(_signingKey);

            var key = Encoding.UTF8.GetBytes("KJNQKDHB453Y35ˆˆ&(1@#%4Y5KJBDLJQH)");
            var cred = new SigningCredentials(
            new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature);
            var accessToken = tokenHandler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = _issuer,
                Audience = _audience,
                Expires = DateTime.UtcNow.AddMinutes(_accessTokenExpirationMinutes),
                SigningCredentials = cred,
                Subject = new ClaimsIdentity(new[] { new Claim("userId", userId) })
            });

            var refreshToken = Guid.NewGuid().ToString();

            ResponseDto rDt = new ResponseDto();
            
            return  rDt;
        }
    }  
}