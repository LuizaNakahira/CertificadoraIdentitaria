using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ELLP.EventModule.Infra.Data;
using ELLP.EventModule.Core.Interfaces;
using ELLP.EventModule.Core.Services;
using ELLP.EventModule.Infra.Repositories;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Registrar repositórios e serviços:
builder.Services.AddScoped<IEventRepository, EventRepository>();
builder.Services.AddScoped<IEventService, EventService>();
builder.Services.AddScoped<IVolunteerRepository, VolunteerRepository>();
builder.Services.AddScoped<IVolunteerService, VolunteerService>();

// Configuração do Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ELLP Event Module API", Version = "v1" });
    c.EnableAnnotations();
});

// Configura CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Configura o Newtonsoft.Json como serializador padrão com formatação de data personalizada
builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
    {
        // Configuração global para formatação de datas
    options.SerializerSettings.DateFormatString = "dd/MM/yyyy HH:mm";
    options.SerializerSettings.Culture = new CultureInfo("pt-BR");
    options.SerializerSettings.Converters.Add(new StringEnumConverter());
});

var app = builder.Build();

// Configure o pipeline HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "ELLP Event Module API v1");
        c.RoutePrefix = string.Empty; 
    });
}

// Inicializa o banco de dados com dados de exemplo
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        // Inicializa o banco de dados com dados de teste
        DbInitializer.InitializeAsync(services).Wait();
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "Ocorreu um erro ao inicializar o banco de dados.");
    }
}

app.UseCors("AllowAll");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();