using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;

namespace ELLP.EventModule.Core.Interfaces
{
    public interface IVolunteerService
    {
        Task<PaginatedResponseDto<VolunteerDto>> GetVolunteersAsync(int page, int pageSize);
        Task<VolunteerDto?> GetVolunteerByIdAsync(int id);
        Task<PaginatedResponseDto<VolunteerDto>> GetVolunteersByEventIdAsync(int eventId, int page, int pageSize);
    }
}