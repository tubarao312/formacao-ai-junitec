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

# V0

> [!NOTE]
> **Tarefa**: Landing page para a JUNITEC.
> - Desenhar landing page básica
> - Correr localmente

1. Vamos scrappar as imagens do site da JUNITEC para podermos dar ao V0 e ele
   as conseguir incluir no site:
```sh
wget -m -r -l1 -A jpg,jpeg,png https://junitec.pt/en/home-en/
```

2. Vamos pedir ao GPT4o para pesquisar sobre a JUNITEC online e criar um
   resumo do que é a JUNITEC e dos seus maiores feitos recentes e antigos, 
   quais são os seus departamentos, etc...

```txt
Search online for JUNITEC. I want to know:
- A summary of what it is
- Its history and biggest accomplishements
- Some of the projects it has worked on
```

3. Com a resposta desta query, vamos pedir ao O1 para ler sobre a JUNITEC e 
   criar uma prompt adequada para alimentarmos ao V0 e criar uma boa landing
   page.

   O resultado final da minha query acabou por ser o seguinte:

```txt
Create a modern landing page for JUNITEC, the Junior Enterprise of Instituto Superior Técnico, focusing on their innovative tech solutions and notable achievements. Include the following sections:

1. Hero Section:
   - Engaging headline introducing JUNITEC as IST’s Junior Enterprise since 1990
   - Brief text highlighting its mission to deliver value-driven technological solutions
   - Prominent call-to-action button to learn more about services or start a project

2. About Section:
   - Short overview of JUNITEC’s history and impact
   - Emphasize the “Most Impactful Project” award in Europe
   - Mention its commitment to providing real-world experience to IST students
   - Potential team or group photo (optional)

3. Projects/Portfolio Section:
   - Showcase the key consulting projects, each with a title, brief description, and an accompanying image or icon:
     • Oficina dos Sons (fun e-learning for kids with reading/writing challenges)
     • Unbabel 3.0 (brain pattern analysis for communication)
     • Intranet for Nova Junior Consulting
     • Brain Auto Manager (BCI + Machine Learning for safer mobility)
     • Mobility Support Platform (collaboration with Thales on European transport)
     • Collector 1.0 (system to manage 50k+ art pieces)
     • Product Management Software (smart vending machine software)
   - Each project card should have a “Learn More” or “View Details” link

4. Awards/Recognitions Section:
   - Highlight the “Most Impactful Project” award
   - Possibly include a timeline or a quick showcase of any other accolades

5. Values & Approach Section (optional):
   - Illustrate JUNITEC’s focus on quality, innovation, and collaboration
   - Mention how they ensure specialized services and partner success

6. Contact/Call-to-Action Section:
   - Encourage visitors to reach out for collaboration or more information
   - Contact form or button to schedule a meeting
   - Display relevant social media links (LinkedIn, etc.)

Overall Style & Tone:
- Clean, modern design
- Professional yet approachable voice
- Use concise language, visually appealing layouts, and clear calls to action

End Goal:
A one-page website that highlights JUNITEC’s history, expertise, major accomplishments, and invites visitors to engage or learn more.

Make sure it uses blue, white, and dark blue colors. I'm also giving you some images already included in the current junitec.com website so that you can include them in the landing page. 
```

4. O site está pronto! Se quiserem correr localmente, podem usar a minha tentativa de
   prática guardada em `/webapp` usando o seguinte comando:

```sh
yarn install
yarn dev
```

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

Para construir um backend e código no geral, a melhor ferramenta é Cursor ou 
GitHub co-pilot. Neste caso, vamos mais uma vez pedir uma prompt ao GPT4o,
alimentá-la ao O1, e depois alimentar a prompt do O1 ao Cursor Agent para
ele nos poder ajudar a construir a nossa app.

O ideal nestas tarefas é reparti-las aos poucos, por isso seguir a seguinte ordem:
1. Base de dados e camada de dados e types
2. Endpoints
3. Documentação

Vamos a isso:

1. Setup de projeto. Recomendo usarem UV:

```sh
uv init
uv add fastapi
```

2. Base de dados e camada de dados e types:

```txt
In /backend, I want to start by creating an SQLite database. I want you to base yourself on the table in @membros.csv and:
- Have a pydantic type that represents a single members with a (first name, second name, department). You will use this in db.py
- Have the following functions in db.py:
    - create_schema - Creates the table if it doesn't already exist.
    - populate_database - opens @members.csv and populates the db.
    - get_all_members
    - kick_random_member (returning the member)
- Make sure the connection is global and init only once.
- The primary key should be first_name, second_name
- DO NOT USE SQLALCHEMY, just the Sqlite3 extension. Keep it simple!

You can create two files:
- models.py
- db.py
```

3. Endpoints:

Começamos por adicionar a dependência de FastAPI:

```sh
uv add fastapi[standard]
```

Depois, podemos usar uma prompt simples:

```txt
Create a FastAPI app in app.py that has a:
- GET for getting all members
- POST for kicking a random member
- POST for reseting the members in the database
```

4. Agora podemos correr a aplicação localmente

```sh
uv run fastapi dev app
```

5. 

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