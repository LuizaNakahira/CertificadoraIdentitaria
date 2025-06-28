using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Domain;

namespace ELLP.EventModule.Core.Interfaces
{
	public interface IEventRepository
	{
        // Corrigindo a referência à entidade Event
        Task<IEnumerable<Event>> GetAllAsync(int page, int pageSize);
        Task<Event?> GetByIdAsync(int id);
    }
}
