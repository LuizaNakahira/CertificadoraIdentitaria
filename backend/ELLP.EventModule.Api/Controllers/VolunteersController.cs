using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;
using ELLP.EventModule.Core.Interfaces;

namespace ELLP.EventModule.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VolunteersController : ControllerBase
    {
        private readonly IVolunteerService _volunteerService;
        
        public VolunteersController(IVolunteerService volunteerService)
        {
            _volunteerService = volunteerService;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int page, [FromQuery] int pageSize)
        {
            var volunteers = await _volunteerService.GetVolunteersAsync(page, pageSize);
            return Ok(volunteers);
        }
        
        [HttpGet("Id/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var volunteer = await _volunteerService.GetVolunteerByIdAsync(id);
            if (volunteer == null)
                return NotFound();
                
            return Ok(volunteer);
        }
        
        [HttpGet("EventId/{eventId}")]
        public async Task<IActionResult> GetByEventId(int eventId, [FromQuery] int page, [FromQuery] int pageSize)
        {
            var volunteers = await _volunteerService.GetVolunteersByEventIdAsync(eventId, page, pageSize);
            return Ok(volunteers);
        }
    }
}