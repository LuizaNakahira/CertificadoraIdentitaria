using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;
using ELLP.EventModule.Core.Interfaces;

namespace ELLP.EventModule.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;
        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int page, [FromQuery] int pageSize)
        {
            var events = await _eventService.GetEventsAsync(page, pageSize);
            return Ok(events);
        }

        [HttpGet("EventId/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var @event = await _eventService.GetEventByIdAsync(id);
            if (@event == null)
                return NotFound();
            return Ok(@event);
        }
    }
}
