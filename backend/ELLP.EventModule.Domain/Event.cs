using System;
using System.Collections.Generic;

namespace ELLP.EventModule.Domain
{
	public class Event
	{
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public DateTime DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public ICollection<EventVolunteer> EventVolunteers { get; set; } = new List<EventVolunteer>();
	}
}

