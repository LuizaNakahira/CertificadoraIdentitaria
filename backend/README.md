# ELLP.EventModule - Backend do Módulo de Eventos

Backend para gerenciamento de eventos e voluntários, desenvolvido com .NET 8 e arquitetura em camadas.

## Visão Geral

Este sistema permite o gerenciamento de eventos e voluntários, possibilitando:
- Listar, visualizar e gerenciar eventos
- Listar, visualizar e gerenciar voluntários
- Associar voluntários a eventos

## Estrutura do Projeto

A solução segue uma arquitetura em camadas:

- **ELLP.EventModule.Api**: Camada de API REST, controllers e endpoints
- **ELLP.EventModule.Core**: Camada de serviços, DTOs e lógica de negócio
- **ELLP.EventModule.Domain**: Camada de entidades de domínio
- **ELLP.EventModule.Infra**: Camada de infraestrutura, repositórios e acesso a dados

### Camadas e Responsabilidades

#### API
Responsável por expor os endpoints REST, validar inputs e rotear as requisições para os serviços apropriados.

#### Core
Contém a lógica de negócios, definição de interfaces, DTOs e serviços que implementam as regras de negócio.

#### Domain
Define as entidades de domínio e as regras de negócio relacionadas ao modelo de dados.

#### Infrastructure
Implementa o acesso a dados, repositórios, configuração de banco de dados e migrações.

## Tecnologias Utilizadas

- **ASP.NET Core 8**: Framework web
- **Entity Framework Core**: ORM para acesso a dados
- **Swagger/OpenAPI**: Documentação de API
- **Newtonsoft.Json**: Serialização/desserialização JSON
- **SQLite**: Banco de dados

## Configuração e Execução

### Pré-requisitos

- .NET SDK 8.0 ou superior
- Visual Studio 2022, Visual Studio Code ou Rider

### Configuração do Ambiente

1. Clone o repositório:
```bash
git clone [url-do-repositório]
cd ELLP.EventModule
```

2. Restaure as dependências:
```bash
dotnet restore
```

3. Execute as migrações do banco de dados:
```bash
cd ELLP.EventModule.Infra
dotnet ef database update
```

4. Inicie a aplicação:
```bash
cd ../ELLP.EventModule.Api
dotnet run
```

5. Acesse o Swagger para testar a API:
```bash
https://localhost:5001
```

## Endpoints da API

A API contém os seguintes endpoints principais:

### Eventos

- `GET /Events` - Listar todos os eventos com paginação
- `GET /Events/Id/{id}` - Obter detalhes de um evento específico

### Voluntários

- `GET /Volunteers` - Listar todos os voluntários com paginação
- `GET /Volunteers/Id/{id}` - Obter detalhes de um voluntário específico
- `GET /Volunteers/EventId/{eventId}` - Listar voluntários por evento

## Formatação de Datas

O sistema utiliza um formato personalizado para datas nos endpoints:

- Formato: `dd/MM/yyyy HH:mm`
- Cultura: `pt-BR`

A formatação é implementada através da configuração global do Newtonsoft.Json no arquivo Program.cs.

## Modelo de Dados

### Event
- `Id`: Identificador único do evento
- `Nome`: Nome do evento
- `DataInicio`: Data e hora de início do evento
- `DataFim`: Data e hora de término do evento (opcional)
- `EventVolunteers`: Coleção de associações entre eventos e voluntários

### Volunteer
- `Id`: Identificador único do voluntário
- `Nome`: Nome do voluntário
- `Email`: Endereço de e-mail do voluntário
- `EventVolunteers`: Coleção de associações entre voluntários e eventos

### EventVolunteer (Relacionamento N:N)
- `EventId`: ID do evento
- `VolunteerId`: ID do voluntário
- `Event`: Navegação para o evento
- `Volunteer`: Navegação para o voluntário

## Configurações Adicionais

### Swagger
A API inclui uma interface Swagger que pode ser acessada pela raiz da aplicação para testar os endpoints e visualizar a documentação.

### CORS
O CORS está configurado para permitir solicitações de qualquer origem, facilitando o desenvolvimento de frontends.

### Logging
O sistema utiliza o sistema de log padrão do ASP.NET Core para registrar informações importantes, erros e avisos.
