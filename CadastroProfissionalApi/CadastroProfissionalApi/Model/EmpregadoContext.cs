using Microsoft.EntityFrameworkCore;

namespace CadastroProfissionalApi.Model
{
    public class EmpregadoContext : DbContext
    {
        public EmpregadoContext(DbContextOptions<EmpregadoContext> options) : base(options)
        {                
        }

        public DbSet<Empregado> Empregado { get; set; }
        public DbSet<Profissao> Profissao { get; set; }
    }
}
