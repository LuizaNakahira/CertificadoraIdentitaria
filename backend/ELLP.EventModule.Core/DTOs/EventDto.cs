using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace ELLP.EventModule.Core.DTOs
{
	public class EventDto
	{
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime DataInicio { get; set; }
        
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? DataFim { get; set; }
        
        public int TotalVoluntarios { get; set; }
    }
}
