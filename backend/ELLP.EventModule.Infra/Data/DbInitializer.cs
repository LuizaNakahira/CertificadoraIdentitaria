using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ELLP.EventModule.Domain;

namespace ELLP.EventModule.Infra.Data
{
    public static class DbInitializer
    {
        public static async Task InitializeAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            
            // Aplica as migrações pendentes se houver
            await context.Database.MigrateAsync();
            
            // Verifica se já existem eventos no banco
            if (await context.Events.AnyAsync())
                return; // O banco já foi inicializado
            
            // Adiciona eventos de exemplo
            var events = new List<Event>
            {
                new Event 
                { 
                    Nome = "Workshop de Programação",
                    DataInicio = DateTime.UtcNow.AddDays(10),
                    DataFim = DateTime.UtcNow.AddDays(10).AddHours(4)
                },
                new Event 
                { 
                    Nome = "Palestra sobre Inteligência Artificial",
                    DataInicio = DateTime.UtcNow.AddDays(15),
                    DataFim = DateTime.UtcNow.AddDays(15).AddHours(2)
                },
                new Event 
                { 
                    Nome = "Curso de Machine Learning",
                    DataInicio = DateTime.UtcNow.AddDays(20),
                    DataFim = DateTime.UtcNow.AddDays(25)
                },
                new Event 
                { 
                    Nome = "Hackathon ELLP",
                    DataInicio = DateTime.UtcNow.AddDays(30),
                    DataFim = DateTime.UtcNow.AddDays(32)
                },
                new Event 
                { 
                    Nome = "Encontro de Desenvolvedores",
                    DataInicio = DateTime.UtcNow.AddDays(5),
                    DataFim = DateTime.UtcNow.AddDays(5).AddHours(3)
                },
                new Event 
                { 
                    Nome = "Conferência de Tecnologia",
                    DataInicio = DateTime.UtcNow.AddDays(45),
                    DataFim = DateTime.UtcNow.AddDays(47)
                },
                new Event 
                { 
                    Nome = "Workshop de Design UI/UX",
                    DataInicio = DateTime.UtcNow.AddDays(12),
                    DataFim = DateTime.UtcNow.AddDays(12).AddHours(8)
                },
                new Event 
                { 
                    Nome = "Meetup de Python",
                    DataInicio = DateTime.UtcNow.AddDays(8),
                    DataFim = DateTime.UtcNow.AddDays(8).AddHours(3)
                },
                new Event 
                { 
                    Nome = "Curso de Desenvolvimento Web",
                    DataInicio = DateTime.UtcNow.AddDays(25),
                    DataFim = DateTime.UtcNow.AddDays(27)
                },
                new Event 
                { 
                    Nome = "Palestra sobre Blockchain",
                    DataInicio = DateTime.UtcNow.AddDays(18),
                    DataFim = DateTime.UtcNow.AddDays(18).AddHours(2)
                },
                new Event 
                { 
                    Nome = "Workshop de Cloud Computing",
                    DataInicio = DateTime.UtcNow.AddDays(35),
                    DataFim = DateTime.UtcNow.AddDays(35).AddHours(6)
                },
                new Event 
                { 
                    Nome = "Curso de Segurança da Informação",
                    DataInicio = DateTime.UtcNow.AddDays(40),
                    DataFim = DateTime.UtcNow.AddDays(42)
                }
            };
            
            await context.Events.AddRangeAsync(events);
            
            // Adiciona voluntários de exemplo
            var volunteers = new List<Volunteer>
            {
                new Volunteer { Nome = "Carlos Silva", Email = "carlos.silva@email.com" },
                new Volunteer { Nome = "Ana Oliveira", Email = "ana.oliveira@email.com" },
                new Volunteer { Nome = "Pedro Santos", Email = "pedro.santos@email.com" },
                new Volunteer { Nome = "Mariana Costa", Email = "mariana.costa@email.com" },
                new Volunteer { Nome = "Lucas Ferreira", Email = "lucas.ferreira@email.com" },
                new Volunteer { Nome = "Julia Almeida", Email = "julia.almeida@email.com" },
                new Volunteer { Nome = "Rafael Lima", Email = "rafael.lima@email.com" },
                new Volunteer { Nome = "Fernanda Rodrigues", Email = "fernanda.rodrigues@email.com" }
            };
            
            await context.Volunteers.AddRangeAsync(volunteers);
            
            // Salva as alterações
            await context.SaveChangesAsync();
            
            // Associa voluntários a eventos aleatoriamente
            var random = new Random();
            var eventVolunteers = new List<EventVolunteer>();
            
            foreach (var @event in events)
            {
                // Seleciona um número aleatório de voluntários (entre 1 e 5) para cada evento
                int numVolunteers = random.Next(1, 6);
                var selectedVolunteers = volunteers.OrderBy(x => random.Next()).Take(numVolunteers).ToList();
                
                foreach (var volunteer in selectedVolunteers)
                {
                    eventVolunteers.Add(new EventVolunteer
                    {
                        Event = @event,
                        Volunteer = volunteer
                    });
                }
            }
            
            await context.EventVolunteers.AddRangeAsync(eventVolunteers);
            await context.SaveChangesAsync();
        }
    }
}