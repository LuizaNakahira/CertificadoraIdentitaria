using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;
using ELLP.EventModule.Core.Interfaces;
using ELLP.EventModule.Domain;

namespace ELLP.EventModule.Core.Services
{
    public class VolunteerService : IVolunteerService
    {
        private readonly IVolunteerRepository _volunteerRepository;

        public VolunteerService(IVolunteerRepository volunteerRepository)
        {
            _volunteerRepository = volunteerRepository;
        }

        public async Task<PaginatedResponseDto<VolunteerDto>> GetVolunteersAsync(int page, int pageSize)
        {
            var volunteers = await _volunteerRepository.GetAllAsync(page, pageSize);
            var totalVolunteers = await _volunteerRepository.CountAsync();

            var volunteerDtos = volunteers.Select(v => MapToDto(v)).ToList();

            return new PaginatedResponseDto<VolunteerDto>
            {
                Items = volunteerDtos,
                PageNumber = page,
                PageSize = pageSize,
                TotalItems = totalVolunteers,
                TotalPages = (int)Math.Ceiling(totalVolunteers / (double)pageSize)
            };
        }

        public async Task<VolunteerDto?> GetVolunteerByIdAsync(int id)
        {
            var volunteer = await _volunteerRepository.GetByIdAsync(id);
            if (volunteer == null)
                return null;

            return MapToDto(volunteer, includeEvents: true);
        }

        public async Task<PaginatedResponseDto<VolunteerDto>> GetVolunteersByEventIdAsync(int eventId, int page, int pageSize)
        {
            var volunteers = await _volunteerRepository.GetByEventIdAsync(eventId, page, pageSize);
            var totalVolunteers = await _volunteerRepository.CountByEventIdAsync(eventId);

            var volunteerDtos = volunteers.Select(v => MapToDto(v)).ToList();

            return new PaginatedResponseDto<VolunteerDto>
            {
                Items = volunteerDtos,
                PageNumber = page,
                PageSize = pageSize,
                TotalItems = totalVolunteers,
                TotalPages = (int)Math.Ceiling(totalVolunteers / (double)pageSize)
            };
        }

        private VolunteerDto MapToDto(Volunteer volunteer, bool includeEvents = false)
        {
            var dto = new VolunteerDto
            {
                Id = volunteer.Id,
                Nome = volunteer.Nome,
                Email = volunteer.Email,
                TotalEventos = volunteer.EventVolunteers?.Count ?? 0
            };

            if (includeEvents && volunteer.EventVolunteers != null && volunteer.EventVolunteers.Any())
            {
                dto.Eventos = volunteer.EventVolunteers
                    .Select(ev => new EventSimpleDto
                    {
                        Id = ev.Event.Id,
                        Nome = ev.Event.Nome,
                        DataInicio = ev.Event.DataInicio
                    }).ToList();
            }

            return dto;
        }
    }
}