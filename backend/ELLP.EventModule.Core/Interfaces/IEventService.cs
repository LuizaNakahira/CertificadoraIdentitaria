using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;

namespace ELLP.EventModule.Core.Interfaces
{
	public interface IEventService
	{
        Task<IEnumerable<EventDto>> GetEventsAsync(int page, int pageSize);
        Task<EventDto?> GetEventByIdAsync(int id);
    }
}

