using System;
using System.Collections.Generic;

namespace ELLP.EventModule.Domain
{
	public class EventVolunteer
	{
        public int Id { get; set; }
        public int EventId { get; set; }
        public int VolunteerId { get; set; }
        public Event Event { get; set; } = default!;
        public Volunteer Volunteer { get; set; } = default!;
    }
}
