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
    public class ProfissaoController : ControllerBase
    {
        private readonly EmpregadoContext _context;

        public ProfissaoController(EmpregadoContext context)
        {
            _context = context;
        }

        // GET: api/Profissao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profissao>>> GetProfissao()
        {
            return await _context.Profissao.ToListAsync();
        }

        // GET: api/Profissao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Profissao>> GetProfissao(int id)
        {
            var profissao = await _context.Profissao.FindAsync(id);

            if (profissao == null)
            {
                return NotFound();
            }

            return profissao;
        }

        // PUT: api/Profissao/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfissao(int id, Profissao profissao)
        {
            if (id != profissao.Id)
            {
                return BadRequest();
            }

            _context.Entry(profissao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfissaoExists(id))
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

        // POST: api/Profissao
        [HttpPost]
        public async Task<ActionResult<Profissao>> PostProfissao(Profissao profissao)
        {
            _context.Profissao.Add(profissao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfissao", new { id = profissao.Id }, profissao);
        }

        // DELETE: api/Profissao/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Profissao>> DeleteProfissao(int id)
        {
            var profissao = await _context.Profissao.FindAsync(id);
            if (profissao == null)
            {
                return NotFound();
            }

            _context.Profissao.Remove(profissao);
            await _context.SaveChangesAsync();

            return profissao;
        }

        private bool ProfissaoExists(int id)
        {
            return _context.Profissao.Any(e => e.Id == id);
        }
    }
}
