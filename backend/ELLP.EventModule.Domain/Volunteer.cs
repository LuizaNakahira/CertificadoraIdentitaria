using System;
using System.Collections.Generic;

namespace ELLP.EventModule.Domain
{
	public class Volunteer
	{
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public string Email { get; set; } = default!;
        public ICollection<EventVolunteer> EventVolunteers { get; set; } = new List<EventVolunteer>();
    }
}

