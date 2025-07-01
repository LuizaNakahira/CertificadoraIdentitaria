using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;
using ELLP.EventModule.Core.Interfaces;
using Swashbuckle.AspNetCore.Annotations;

namespace ELLP.EventModule.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [SwaggerTag("Endpoints para consulta e visualização de eventos")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;
        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        [SwaggerOperation(
            Summary = "Retorna uma lista paginada de todos os eventos",
            Description = "Este endpoint retorna uma lista paginada de eventos. Use os parâmetros de paginação para controlar a quantidade de resultados."
        )]
        [SwaggerResponse(200, "Lista de eventos retornada com sucesso", typeof(PaginatedResponseDto<EventDto>))]
        [SwaggerResponse(400, "Parâmetros de paginação inválidos")]
        public async Task<IActionResult> GetAll([FromQuery] int page, [FromQuery] int pageSize)
        {
            if (page <= 0 || pageSize <= 0)
                return BadRequest("Parâmetros de paginação inválidos. Page e pageSize devem ser maiores que zero.");

            var events = await _eventService.GetEventsAsync(page, pageSize);
            return Ok(events);
        }

        [HttpGet("EventId/{id}")]
        [SwaggerOperation(
            Summary = "Obtém um evento específico pelo seu ID",
            Description = "Este endpoint retorna os detalhes de um evento específico baseado no ID fornecido."
        )]
        [SwaggerResponse(200, "Evento encontrado com sucesso", typeof(EventDto))]
        [SwaggerResponse(404, "Evento não encontrado")]
        public async Task<IActionResult> GetById(int id)
        {
            var @event = await _eventService.GetEventByIdAsync(id);
            if (@event == null)
                return NotFound("Evento não encontrado");
                
            return Ok(@event);
    }
}
}
