using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace ELLP.EventModule.Core.DTOs
{
	public class VolunteerDto
	{
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public int TotalEventos { get; set; }
        public List<EventSimpleDto>? Eventos { get; set; }
    }

    // DTO simples para listar eventos do voluntário
    public class EventSimpleDto
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime DataInicio { get; set; }
    }
}