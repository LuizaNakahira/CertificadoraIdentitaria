using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ELLP.EventModule.Core.DTOs;
using ELLP.EventModule.Core.Interfaces;
using Swashbuckle.AspNetCore.Annotations;

namespace ELLP.EventModule.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [SwaggerTag("Endpoints para consulta e visualização de voluntários")]
    public class VolunteersController : ControllerBase
    {
        private readonly IVolunteerService _volunteerService;
        
        public VolunteersController(IVolunteerService volunteerService)
        {
            _volunteerService = volunteerService;
        }
        
        [HttpGet]
        [SwaggerOperation(
            Summary = "Retorna uma lista paginada de todos os voluntários",
            Description = "Este endpoint retorna uma lista paginada de todos os voluntários cadastrados no sistema."
        )]
        [SwaggerResponse(200, "Lista de voluntários retornada com sucesso", typeof(PaginatedResponseDto<VolunteerDto>))]
        [SwaggerResponse(400, "Parâmetros de paginação inválidos")]
        public async Task<IActionResult> GetAll([FromQuery] int page, [FromQuery] int pageSize)
        {
            if (page <= 0 || pageSize <= 0)
                return BadRequest("Parâmetros de paginação inválidos. Page e pageSize devem ser maiores que zero.");
        
            var volunteers = await _volunteerService.GetVolunteersAsync(page, pageSize);
            return Ok(volunteers);
        }
        
        [HttpGet("Id/{id}")]
        [SwaggerOperation(
            Summary = "Obtém um voluntário específico pelo seu ID",
            Description = "Este endpoint retorna os detalhes de um voluntário específico baseado no ID fornecido."
        )]
        [SwaggerResponse(200, "Voluntário encontrado com sucesso", typeof(VolunteerDto))]
        [SwaggerResponse(404, "Voluntário não encontrado")]
        public async Task<IActionResult> GetById(int id)
        {
            var volunteer = await _volunteerService.GetVolunteerByIdAsync(id);
            if (volunteer == null)
                return NotFound("Voluntário não encontrado");
                
            return Ok(volunteer);
    }
        
        [HttpGet("EventId/{eventId}")]
        [SwaggerOperation(
            Summary = "Retorna uma lista paginada de voluntários associados a um evento específico",
            Description = "Este endpoint retorna todos os voluntários que estão associados a um evento específico, com paginação."
        )]
        [SwaggerResponse(200, "Lista de voluntários do evento retornada com sucesso", typeof(PaginatedResponseDto<VolunteerDto>))]
        [SwaggerResponse(400, "Parâmetros de paginação inválidos")]
        public async Task<IActionResult> GetByEventId(int eventId, [FromQuery] int page, [FromQuery] int pageSize)
        {
            if (page <= 0 || pageSize <= 0)
                return BadRequest("Parâmetros de paginação inválidos. Page e pageSize devem ser maiores que zero.");
                
            var volunteers = await _volunteerService.GetVolunteersByEventIdAsync(eventId, page, pageSize);
            return Ok(volunteers);
}
    }
}