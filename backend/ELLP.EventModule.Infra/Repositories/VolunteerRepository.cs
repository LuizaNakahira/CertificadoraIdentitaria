using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ELLP.EventModule.Core.Interfaces;
using ELLP.EventModule.Domain;
using ELLP.EventModule.Infra.Data;

namespace ELLP.EventModule.Infra.Repositories
{
    public class VolunteerRepository : IVolunteerRepository
    {
        private readonly ApplicationDbContext _context;

        public VolunteerRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public async Task<IEnumerable<Volunteer>> GetAllAsync(int page, int pageSize)
        {
            return await _context.Volunteers
                .OrderBy(v => v.Nome)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<Volunteer?> GetByIdAsync(int id)
        {
            return await _context.Volunteers
                .Include(v => v.EventVolunteers)
                .ThenInclude(ev => ev.Event)
                .FirstOrDefaultAsync(v => v.Id == id);
        }

        public async Task<IEnumerable<Volunteer>> GetByEventIdAsync(int eventId, int page, int pageSize)
        {
            return await _context.EventVolunteers
                .Where(ev => ev.EventId == eventId)
                .Include(ev => ev.Volunteer)
                .OrderBy(ev => ev.Volunteer.Nome)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(ev => ev.Volunteer)
                .ToListAsync();
        }

        public async Task<int> CountAsync()
        {
            return await _context.Volunteers.CountAsync();
        }

        public async Task<int> CountByEventIdAsync(int eventId)
        {
            return await _context.EventVolunteers
                .Where(ev => ev.EventId == eventId)
                .CountAsync();
        }
    }
}