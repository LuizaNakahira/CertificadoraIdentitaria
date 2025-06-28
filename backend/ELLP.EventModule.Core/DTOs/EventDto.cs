using System;
using ELLP.EventModule.Core.DTOs;

namespace ELLP.EventModule.Core.DTOs
{
	public class EventDto
	{
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public DateTime DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public int TotalVoluntarios { get; set; }
    }
}

