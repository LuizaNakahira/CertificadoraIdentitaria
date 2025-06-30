using System;
using System.Collections.Generic;

namespace ELLP.EventModule.Core.DTOs
{
	public class VolunteerDto
	{
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public string Email { get; set; } = default!;
        public int TotalEventos { get; set; }
        public List<EventSimpleDto>? Eventos { get; set; } // Lista opcional de eventos do voluntário
    }

    // DTO simples para listar eventos do voluntário
    public class EventSimpleDto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public DateTime DataInicio { get; set; }
    }
}