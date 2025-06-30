using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;
using ELLP.EventModule.Core.Interfaces;
using ELLP.EventModule.Domain;

namespace ELLP.EventModule.Core.Services
{
	public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;
        
        public EventService(IEventRepository eventRepository)
		{
            _eventRepository = eventRepository;
        }

        public async Task<EventDto?> GetEventByIdAsync(int id)
        {
            var @event = await _eventRepository.GetByIdAsync(id);
            if (@event == null)
                return null;

            return MapToDto(@event);
        }

        public async Task<PaginatedResponseDto<EventDto>> GetEventsAsync(int page, int pageSize)
        {
            var events = await _eventRepository.GetAllAsync(page, pageSize);
            var totalEvents = await _eventRepository.CountAsync();
            
            var eventDtos = events.Select(e => MapToDto(e)).ToList();
            
            return new PaginatedResponseDto<EventDto>
            {
                Items = eventDtos,
                PageNumber = page,
                PageSize = pageSize,
                TotalItems = totalEvents,
                TotalPages = (int)Math.Ceiling(totalEvents / (double)pageSize)
            };
        }

        private EventDto MapToDto(Event @event)
        {
            return new EventDto
            {
                Id = @event.Id,
                Nome = @event.Nome,
                DataInicio = @event.DataInicio,
                DataFim = @event.DataFim,
                TotalVoluntarios = @event.EventVolunteers?.Count ?? 0
            };
        }
    }
}