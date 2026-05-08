# Arena Pro-Player BR

Sistema Full Stack desenvolvido com:

- Frontend: Angular + TailwindCSS
- Backend: NestJS
- Linguagem: TypeScript

O projeto simula um sistema de gerenciamento de times de E-sports.

---

# Objetivo do Projeto

Este projeto foi criado para ensinar:

- Estrutura Full Stack
- Backend com NestJS
- Frontend com Angular
- APIs REST
- Controllers
- Services
- Modules
- Entidades
- Comunicação HTTP
- Organização profissional de projetos

---

# Tecnologias Utilizadas

## Frontend

- Angular
- TypeScript
- TailwindCSS

## Backend

- NestJS
- TypeScript
- Node.js

---

# Funcionalidades

O sistema permite:

- Criar times
- Listar times
- Adicionar vitórias
- Remover times
- Atualizar ranking automaticamente

---

# Estrutura do Projeto

```bash
src/
│
├── app.module.ts
├── app.controller.ts
├── app.service.ts
├── main.ts
│
└── time/
    │
    ├── time.module.ts
    ├── time.controller.ts
    ├── time.service.ts
    │
    └── entities/
        └── time.entity.ts
```

---

# Explicação de Cada Arquivo

---

# main.ts

Arquivo principal da aplicação.

Responsável por:

- iniciar o servidor
- carregar o AppModule
- habilitar CORS
- definir porta da aplicação

---

# app.module.ts

Módulo principal do sistema.

Responsável por:

- organizar módulos
- registrar controllers
- registrar services

---

# app.controller.ts

Controller principal da aplicação.

Responsável pelas rotas iniciais.

Exemplo:

```http
GET /
```

---

# app.service.ts

Service principal da aplicação.

Contém regras simples da aplicação principal.

---

# time.module.ts

Módulo responsável pela área de times.

Conecta:

- controller de times
- service de times

---

# time.controller.ts

Controller responsável pelas rotas HTTP dos times.

Rotas:

```http
GET    /times
POST   /times
PATCH  /times/:id/vitoria
DELETE /times/:id
```

---

# time.service.ts

Service responsável pela lógica do sistema.

Responsável por:

- criar times
- listar times
- adicionar vitórias
- remover times
- validar dados

---

# time.entity.ts

Entidade que representa um time.

Exemplo:

```ts
export class Time {
  id: number;
  nome: string;
  jogo: string;
  vitorias: number;
}
```

---

# O que é um Controller?

Controller recebe requisições HTTP.

Exemplo:

```http
GET /times
```

O controller chama o service.

---

# O que é um Service?

Service contém as regras de negócio.

Exemplo:

- criar dados
- editar dados
- remover dados

---

# O que é um Module?

Module organiza partes da aplicação.

Exemplo:

```ts
@Module({
  controllers: [],
  providers: [],
})
```

---

# O que é uma Entity?

Entity representa a estrutura dos dados.

Exemplo:

```ts
class Usuario {
  nome: string;
}
```

---

# Fluxo da Aplicação

```text
Frontend
   ↓
Controller
   ↓
Service
   ↓
Dados
```

---

# Instalação Completa do Projeto

---

# 1) Instalar Node.js

Baixe:

https://nodejs.org

Verifique:

```bash
node -v
npm -v
```

---

# 2) Instalar NestJS CLI

```bash
npm install -g @nestjs/cli
```

Verifique:

```bash
nest --version
```

---

# 3) Criar Projeto NestJS

```bash
nest new arena-pro-player-backend
```

Escolha:

```bash
npm
```

---

# 4) Entrar na Pasta

```bash
cd arena-pro-player-backend
```

---

# 5) Rodar Projeto

```bash
npm run start:dev
```

Servidor:

```bash
http://localhost:3000
```

---

# 6) Criar Módulo Time

```bash
nest generate module time
```

ou:

```bash
nest g mo time
```

---

# 7) Criar Controller

```bash
nest generate controller time
```

ou:

```bash
nest g co time
```

---

# 8) Criar Service

```bash
nest generate service time
```

ou:

```bash
nest g s time
```

---

# 9) Criar Pasta Entities

```bash
mkdir src/time/entities
```

---

# 10) Criar Entity

Criar arquivo:

```bash
time.entity.ts
```

---

# Executar Backend

```bash
npm run start:dev
```

---

# Instalação do Frontend Angular

---

# 1) Instalar Angular CLI

```bash
npm install -g @angular/cli
```

Verifique:

```bash
ng version
```

---

# 2) Criar Projeto Angular

```bash
ng new arena-pro-player-frontend
```

Escolha:

```bash
CSS
```

---

# 3) Entrar na Pasta

```bash
cd arena-pro-player-frontend
```

---

# 4) Instalar TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

---

# 5) Inicializar Tailwind

```bash
npx tailwindcss init
```

---

# 6) Rodar Angular

```bash
ng serve
```

Abrir:

```bash
http://localhost:4200
```

---

# Comunicação Frontend + Backend

Angular faz requisições HTTP para NestJS.

Exemplo:

```ts
this.http.get('http://localhost:3000/times')
```

---

# Rotas da API

---

# Listar Times

```http
GET /times
```

---

# Criar Time

```http
POST /times
```

Body:

```json
{
  "nome": "Team Alpha",
  "jogo": "Valorant"
}
```

---

# Adicionar Vitória

```http
PATCH /times/1/vitoria
```

---

# Remover Time

```http
DELETE /times/1
```

---

# Explicação do CORS

No arquivo:

```ts
main.ts
```

Existe:

```ts
app.enableCors();
```

Isso permite:

```text
Angular (4200)
acessar
NestJS (3000)
```

Sem isso o navegador bloqueia as requisições.

---

# Explicação do Date.now()

Usado para gerar IDs únicos.

Exemplo:

```ts
const id = Date.now();
```

---

# Explicação do async/await

Usado para operações assíncronas.

Exemplo:

```ts
const dados = await buscarDados();
```

---

# Explicação do Dependency Injection

NestJS injeta classes automaticamente.

Exemplo:

```ts
constructor(private service: AppService) {}
```

---

# Como Rodar Tudo

## Backend

```bash
npm run start:dev
```

## Frontend

```bash
ng serve
```

---

# URLs do Projeto

## Backend

```text
http://localhost:3000
```

## Frontend

```text
http://localhost:4200
```

---

# Melhorias Futuras

Você pode adicionar:

- Banco de dados
- Login
- JWT
- Ranking avançado
- Upload de imagem
- Docker
- Deploy
- WebSocket
- Chat em tempo real

---

# Aprendizados Neste Projeto

Este projeto ensina:

- Estrutura profissional
- API REST
- CRUD
- Angular
- NestJS
- Tailwind
- Organização Full Stack
- TypeScript
- Backend moderno

---

# Autor

Projeto educacional desenvolvido para estudo de:

- Angular
- NestJS
- APIs REST
- Full Stack Development
