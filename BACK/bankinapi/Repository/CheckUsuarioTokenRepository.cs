using AutoMapper;
using bankinapi.DbContexts;
using bankinapi.Models;
using Microsoft.EntityFrameworkCore;

namespace bankinapi.Repository
{
    public class CheckUsuarioTokenRepository
    {
        private readonly ApplicationDbContext _db;
        private IMapper _mapper;

        public CheckUsuarioTokenRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task<int> buscaUsuario(Usuario usu)
        {
            try
            {
                Usuario usuario = await _db.Usuarios.Where(db => db.CPF == usu.CPF).FirstOrDefaultAsync();

                if (usuario == null)
                {
                    return 0;
                }
                else
                {
                    Usuario usuarioSenha = await _db.Usuarios.Where(db => db.CPF == usu.CPF && db.SENHA == usu.SENHA).FirstOrDefaultAsync();

                    if (usuarioSenha != null)
                    {
                        return 1;
                    }
                    else
                    {
                        return 2;
                    }
                }
            }
            catch (Exception ex)
            {
                return 3;
            }       
        }

        public async Task<Usuario> buscaDadosUsuario(Usuario usu)
        {
            Usuario usuario = await _db.Usuarios.Where(db => db.CPF == usu.CPF && db.SENHA == usu.SENHA).FirstOrDefaultAsync();
            return _mapper.Map<Usuario>(usuario);
        }
    }
}
