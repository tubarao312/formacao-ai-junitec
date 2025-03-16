# Formação AI Dev Tooling JUNITEC
Guia para a formação de AI Dev Tooling para a JUNITEC

# Motivação
- **Importância para non-technical people** - podem executar os vossos projetos facilmente sem estarem dependentes dos nerds de informática (eu).
- **Importância para programadores** - podem ser 10x programmers e executar tarefas numa escala que era anteriormente impossível sem levantar mundos e fundos.

---

# ChatGPT

## Modelos
É important usar o modelo correto dependendo da situação:

### 4o
**Standard Model**

- Pesquisas online
- Problemas pequenos (e.g. implementa esta função de <= 50 linhas)
- Exploração de conceitos (e.g. explica-me como funciona React e Next)
- Extração e interpretação de texto longo (até 1000 linhas):
    - Error stack traces
    - CSVs
    - JSON

### o1 / o3
**Chain-of-thought Models**

- Feedback sobre textos
- Feedback e interpretação de excertos de código longos (aka `"wtf does this code do?"`)
- Tarefas de programação complexas:
    - Arquitetura de sistemas
    - Matemática & física
    - System-level programming (e.g. compiladores)
    - Escrever test suites

## Técnicas
- **Fotografias**: É possível postar fotografias e o ChatGPT sabe extrair.
- **Metaprompting / Prompt Chaining**: É possível pedir ao GPT para criar 
  prompts mega específicas para alimentar ao GPT ou outra ferramenta de AI e
  conseguir resultados melhores.

---

> [!TIP]
> Vamos agora passar para a parte prática do guia executando duas tarefas com a
> ferramenta apropriada para cada tarefa.

# V0 + Next + Vercel

> [!NOTE]
> **Tarefa**: Landing page para a JUNITEC.
> - Desenhar landing page básica
> - Corrigir pequenos bugs em Next
> - Dar deploy da aplicação em Vercel

---

# Cursor

> [!NOTE]
> **Tarefa**: Backend para "gerir" membros da JUNITEC.
> - Base de dados SQLite com uma tabela pré-populada de membros de consultoria 
>   e inovação.
> - Aplicação FastAPI com endpoints para dar reset à lista, promover membros de
>   junirebento para membro oficial, e escolher membros ao calhas para fazer a 
>   limpeza semanal da sede.
> - Criar documentação automática com AI.
> - Gerar uma pequena suite de testes para a aplicação.

---

# O modelo mais poderoso de todos
O modelo mais importante é o vosso cérebro. AI não é uma alternativa a ser um engenheiro informático competente - é apenas um complemento.

Deixo-vos com alguns learnings essenciais para serem bons programadores:

### Frontend
A tech stack mais popular neste momento:

- **Tailwind** - CSS framework
- **React** - Component Framework
- **Next.js** - Web framework on top of React
- **Vercel** - Cloud deployment on top of Next.js 

### Linguagens
Linguagens populares:
- **Javascript**
    - Typescript
- **Python** - Usado em todo o lado.
    - Type hinting & Pydantic.
    - UV - Package & project manager.
    - Polars - Modern Pandas alternative.
- **Go** - A linguagem mais popular e bem paga neste momento.

Linguagens que vos vão tornar mais espertos:

- **Rust** - A melhor linguagem de todas.
- **Prolog** - Aprender recursão e programação lógica.

### Bases de dados
Só há duas bases de dados que interessam a sério:
- **SQLite** - Projetos pequenos
- **Postgres** - Projetos grandes

### Conceitos
- **Ler source code** - Aprender a ler o source code das ferramentas é a 
  melhor maneira de evoluir depressa. Podem **usar AI** para esta vos explicar
  como algo funciona.
- **Ler documentação** - É 100% necessário ler a documentação de projetos para
  perceber como funcionam e como é suposto usar algo. Aprendam com os meus
  erros e evitem perder anos das vossas vidas a tentar adivinhar qual é a 
  maneira correta de usar uma biblioteca.
- **Projetos projetos projetos** são a única maneira de chegarem a um nível de
  conhecimento sénior e impressionarem outras empresas em tempo útil. A
  universidade não vai ajudar.

### Ferramentas
- **Git & GitHub** - Source control e project management
- **Linux** - Deployments a sério acontecem todos em máquinas de Linux
- **Docker** - Containerização e deployment
- **GitHub Actions** - CICD
- **Kubernetes** - Escalar Docker containers para escala mundial
- **Linear.app** - Organização de projetos

### Livros
Aqui estão alguns livros que eu considero relevantes para engenheiros de
software, por nível de importância:

1. [Building Microservices](https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/) - 
  Arquitetura moderna em 100% das empresas. Ensina-vos todos os conceitos
  relevantes de informática de maneira opinada, tal como começar pequeno
  e escalar a vossa arquitetura.
2. [Use the Index Luke](https://use-the-index-luke.com/) - Guia rápido de
  otimizar uma base de dados de SQL para escalar para milhares de utilizadores
  sem performance issues.
3. [Designing Data Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) - 
  Arquitetura de bases de dados e sistemas distribuídos na escala de Terabytes.
  Ensina também a pensar na maneira como formatamos dados e como tornar as 
  nossas aplicações backwards e forwards compatibible.
4. [Effective Typescript](https://effectivetypescript.com/) - Como usar a
  linguagem mais popular do mundo.
5. [Async Rust](https://www.oreilly.com/library/view/async-rust/9781098149086/) -
  Introdução a programação assíncrona. Livro de 200 páginas extremamente denso
  mas muito prático sobre como estruturar programas modernos de forma 
  non-blocking.