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
                    DataInicio = DateTime.Now.AddDays(10),
                    DataFim = DateTime.Now.AddDays(10).AddHours(4)
                },
                new Event 
                { 
                    Nome = "Palestra sobre Inteligência Artificial",
                    DataInicio = DateTime.Now.AddDays(15),
                    DataFim = DateTime.Now.AddDays(15).AddHours(2)
                },
                new Event 
                { 
                    Nome = "Curso de Machine Learning",
                    DataInicio = DateTime.Now.AddDays(20),
                    DataFim = DateTime.Now.AddDays(25)
                },
                new Event 
                { 
                    Nome = "Hackathon ELLP",
                    DataInicio = DateTime.Now.AddDays(30),
                    DataFim = DateTime.Now.AddDays(32)
                },
                new Event 
                { 
                    Nome = "Encontro de Desenvolvedores",
                    DataInicio = DateTime.Now.AddDays(5),
                    DataFim = DateTime.Now.AddDays(5).AddHours(3)
                },
                new Event 
                { 
                    Nome = "Conferência de Tecnologia",
                    DataInicio = DateTime.Now.AddDays(45),
                    DataFim = DateTime.Now.AddDays(47)
                },
                new Event 
                { 
                    Nome = "Workshop de Design UI/UX",
                    DataInicio = DateTime.Now.AddDays(12),
                    DataFim = DateTime.Now.AddDays(12).AddHours(8)
                },
                new Event 
                { 
                    Nome = "Meetup de Python",
                    DataInicio = DateTime.Now.AddDays(8),
                    DataFim = DateTime.Now.AddDays(8).AddHours(3)
                },
                new Event 
                { 
                    Nome = "Curso de Desenvolvimento Web",
                    DataInicio = DateTime.Now.AddDays(25),
                    DataFim = DateTime.Now.AddDays(27)
                },
                new Event 
                { 
                    Nome = "Palestra sobre Blockchain",
                    DataInicio = DateTime.Now.AddDays(18),
                    DataFim = DateTime.Now.AddDays(18).AddHours(2)
                },
                new Event 
                { 
                    Nome = "Workshop de Cloud Computing",
                    DataInicio = DateTime.Now.AddDays(35),
                    DataFim = DateTime.Now.AddDays(35).AddHours(6)
                },
                new Event 
                { 
                    Nome = "Curso de Segurança da Informação",
                    DataInicio = DateTime.Now.AddDays(40),
                    DataFim = DateTime.Now.AddDays(42)
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