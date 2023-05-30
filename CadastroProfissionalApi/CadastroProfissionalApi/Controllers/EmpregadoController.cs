using CadastroProfissionalApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CadastroProfissionalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpregadoController : ControllerBase
    {
        private readonly EmpregadoContext _context;

        public EmpregadoController(EmpregadoContext context)
        {
            _context = context;
        }

        // GET: api/Empregado
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empregado>>> GetEmpregado()
        {
            return await _context.Empregado.ToListAsync();
        }

        // GET: api/Empregado/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empregado>> GetEmpregado(int id)
        {
            var empregado = await _context.Empregado.FindAsync(id);

            if (empregado == null)
            {
                return NotFound();
            }

            return empregado;
        }

        // PUT: api/Empregado/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpregado(int id, Empregado empregado)
        {
            if (id != empregado.Id)
            {
                return BadRequest();
            }

            _context.Entry(empregado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpregadoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Empregado
        [HttpPost]
        public async Task<ActionResult<Empregado>> PostEmpregado(Empregado empregado)
        {
            _context.Empregado.Add(empregado);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmpregado", new { id = empregado.Id }, empregado);
        }

        // DELETE: api/Empregado/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Empregado>> DeleteEmpregado(int id)
        {
            var empregado = await _context.Empregado.FindAsync(id);
            if (empregado == null)
            {
                return NotFound();
            }

            _context.Empregado.Remove(empregado);
            await _context.SaveChangesAsync();

            return empregado;
        }

        private bool EmpregadoExists(int id)
        {
            return _context.Empregado.Any(e => e.Id == id);
        }
    }
}
