using System.ComponentModel.DataAnnotations;

namespace bankinapi.Models
{
    public class Usuario
    {
        [Key]
        public int ID_USUARIO { get; set; }
        public string? NOME { get; set; }
        public string? SOBRE_NOME { get; set; }
        public byte[] SENHA {get;set;}
        public string? EMAIL { get; set; }
        public decimal SALDO { get; set; }
        public string? TOKEN { get; set; }
        [Required]
        public string CPF { get; set; }
    }
}