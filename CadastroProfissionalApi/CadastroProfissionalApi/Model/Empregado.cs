using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CadastroProfissionalApi.Model
{
    public class Empregado
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(150)]
        public string Nome { get; set; }

        [StringLength(150)]
        public string Sobrenome { get; set; }

        [StringLength(250)]
        public string Email { get; set; }

        public int Idade { get; set; }

        public DateTime DataAdmissao { get; set; }

        [StringLength(20)]
        public string Genero { get; set; }

        public int Casado { get; set; }

        public int Ativo { get; set; }

        public int IdProfissao { get; set; }

        [NotMapped]
        public string DescricaoProfissao { get; set; }
    }
}
