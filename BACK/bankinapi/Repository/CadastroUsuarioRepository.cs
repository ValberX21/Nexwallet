using AutoMapper;
using bankinapi.DbContexts;
using bankinapi.Models;

namespace bankinapi.Repository
{
    public class CadastroUsuarioRepository
    {
        private readonly ApplicationDbContext _db;
        private IMapper _mapper;

        public CadastroUsuarioRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        public async Task<bool> inseriNovoUsuario(Usuario usuarioDto)
        {
            try
            {
                _db.Usuarios.Add(usuarioDto);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
        }

        public int verificaUsuarioNaBase(Usuario usuarioDto)
        {
            try
            {
                Usuario usu = _db.Usuarios.Where(usu => usu.CPF == usuarioDto.CPF).FirstOrDefault();

                if (usu == null)
                {
                    return 1;
                }
                else
                {
                    return 2;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return 3;
            }
        }
    }
}
