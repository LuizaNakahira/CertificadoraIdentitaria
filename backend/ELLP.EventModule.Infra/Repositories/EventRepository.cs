using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ELLP.EventModule.Core.Interfaces;
using ELLP.EventModule.Domain;
using ELLP.EventModule.Infra.Data;

namespace ELLP.EventModule.Infra.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly ApplicationDbContext _context;

        public EventRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Event>> GetAllAsync(int page, int pageSize)
        {
            return await _context.Events
                .Include(e => e.EventVolunteers)
                .OrderBy(e => e.DataInicio)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<Event?> GetByIdAsync(int id)
        {
            return await _context.Events
                .Include(e => e.EventVolunteers)
                .FirstOrDefaultAsync(e => e.Id == id);
        }
    }
}