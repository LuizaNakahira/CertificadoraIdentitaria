using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Domain;

namespace ELLP.EventModule.Core.Interfaces
{
	public interface IVolunteerRepository
	{
        Task<IEnumerable<Volunteer>> GetAllAsync(int page, int pageSize);
        Task<Volunteer?> GetByIdAsync(int id);
        Task<IEnumerable<Volunteer>> GetByEventIdAsync(int eventId, int page, int pageSize);
        Task<int> CountAsync();
        Task<int> CountByEventIdAsync(int eventId);
    }
}