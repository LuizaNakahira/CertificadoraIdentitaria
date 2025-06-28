using System.Collections.Generic;
using System.Threading.Tasks;
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
        
        // Implementar métodos conforme a interface IVolunteerRepository
    }
}