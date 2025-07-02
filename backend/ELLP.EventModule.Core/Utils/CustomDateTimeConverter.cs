using System;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace ELLP.EventModule.Core.DTOs
{
    public class CustomDateTimeConverter : IsoDateTimeConverter
    {
        public CustomDateTimeConverter()
        {
            DateTimeFormat = "dddd, dd 'de' MMMM 'de' yyyy 'às' HH:mm";
            Culture = new CultureInfo("pt-BR"); 
        }
    }
}