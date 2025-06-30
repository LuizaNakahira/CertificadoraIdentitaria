using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Domain;

namespace ELLP.EventModule.Core.Interfaces
{
	public interface IEventRepository
	{
        Task<IEnumerable<Event>> GetAllAsync(int page, int pageSize);
        Task<Event?> GetByIdAsync(int id);
        Task<int> CountAsync(); // Novo método para contar o total de eventos
    }
}