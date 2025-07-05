# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📅 Módulo de Gerenciamento de Eventos e Voluntários – ELLP

## 📌 Visão Geral

Este repositório contém o módulo complementar do projeto de CCI para o projeto de extensão **ELLP**, com foco na **visualização e gerenciamento interno de eventos e voluntários**.

O sistema não permite criação ou cadastro de novos dados — apenas consulta, organização e paginação das informações já existentes, integrando-se ao site principal.

🔗 Protótipo: [Framer](https://framer.com/projects/Agentic-copy--2cVt3sbPaoouJ0pz4GDh-hDNfe?node=augiA20Il)  
🔗 GitHub principal: [Certificadora Identitária](https://github.com/LuizaNakahira/CertificadoraIdentitaria)  
🔗 Trello de Planejamento: [Trello - CCI](https://trello.com/b/pRYz3RRj/cci)

---

## 🛠️ Para Compilar e Executar o Sistema

### ⚙️ Ferramentas Utilizadas

- **Editor**: [Visual Studio Code](https://code.visualstudio.com/) (v1.90+)
- **Front-End**: HTML5, CSS3, JavaScript ES6+  
- **Back-End**: [Node.js](https://nodejs.org/) v20.x (LTS)  
- **Banco de Dados**: [SQLite](https://www.sqlite.org/) v3.50.2+
- **Gerenciador de Pacotes**: [npm](https://www.npmjs.com/) v10+

---

### 📚 Bibliotecas Complementares

- `sqlite3` – integração com banco de dados SQLite
- `express` – servidor backend simples (se utilizado)
- `dotenv` – gerenciamento de variáveis de ambiente
- `nodemon` – atualização automática do servidor durante o dev
- `uuid` – geração de IDs únicos

---

### 🧱 Como Executar Localmente

#### 1. Clone o Projeto

```bash
git clone https://github.com/LuizaNakahira/CertificadoraIdentitaria.git
cd CertificadoraIdentitaria
cd ellp-modifications
```

#### 2. Instale as Dependências

```bash
npm install
```

#### 3. Configure as Variáveis de Ambiente

Crie o arquivo `.env` com os dados de conexão:

```env
SQLITE_DB_PATH=./ellp_db.sqlite
PORT=3000

```

#### 4. Execute o Servidor

```bash
npm start
npm run dev 
```

---

## 🧪 Para Testar o Sistema

### 👥 Equipe

**Equipe Projeto CCI**  
Participantes:  

- [KAUAN FELIPE A DE LIMA](https://github.com/kauanfelipe96)
- [LUIZA XAVIER NAKAHIRA](https://github.com/LuizaNakahira)  
- [MARCIO GUSTAVO DA SILVA](https://github.com/bowiesleeper)
- [JOÃO VICTOR G DA SILVA](https://github.com/guidorizi)
- [WILSON DE OLIVEIRA SANTOS](https://github.com/muvucka)

---

### 🎯 Objetivo

Gerenciamento dos dados de eventos e voluntários do projeto **ELLP**, otimizando a interface para as equipes administrativas.

---

### ✅ Funcionalidades Desenvolvidas

- Visualização paginada de eventos
- Visualização paginada de voluntários inscritos
- Cadastro de novos eventos com formulario.
- Integração com o sistema principal via botões no site existente

---

### 🔁 Roteiro para Testes

1. Acesse o módulo via botões/ scroll inseridos no site principal.
2. Teste a visualização dos **eventos** com paginação.
3. Teste o cadastro dos **eventos** com formulario.
4. Acesse o módulo de **voluntários** com paginação.
5. Verifique se os dados estão sendo carregados corretamente via SQLite.
6. Teste responsividade e desempenho da navegação.

---

## 🔀 GitHub – Organização e Padronização

### 🌿 Estrutura de Branches

- `main`: Versão final e estável do sistema.
- `front`: Desenvolvimento do front-end.
- `feature/backend`: Desenvolvimento do back-end.

### 📏 Regras de Uso

- Crie branches a partir de `front` ou `feature/backend`
- Após finalizar:
  - Teste localmente
  - Crie um Pull Request
  - Após o merge, delete a branch

---

## 📄 Licença

MIT © 2025 – Projeto CCI
