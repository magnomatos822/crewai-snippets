# CrewAI Snippets for VS Code

Esta extensão fornece uma coleção abrangente de snippets de código para o desenvolvimento com CrewAI no Visual Studio Code. CrewAI é um framework Python para orquestrar agentes de IA que trabalham em equipe para resolver tarefas complexas.

## 🚀 Funcionalidades

Esta extensão inclui snippets para todas as principais funcionalidades do CrewAI:

### 📋 Componentes Básicos

#### 1. `crew-agent` - Criar um Agente CrewAI Completo

```python
from crewai import Agent

agent = Agent(
    role='role',
    goal='goal',
    backstory='agent_backstory',
    tools=[tools],
    llm=llm,
    verbose=True,
    allow_delegation=False,
    max_iter=5,
    max_rpm=10,
    memory=True,
    system_template="",
    prompt_template="",
    response_template=""
)
```

#### 2. `crew-task` - Criar uma Tarefa CrewAI Completa

```python
from crewai import Task

task = Task(
    description='task_description',
    agent=agent,
    expected_output='expected_output',
    tools=[tools],
    async_execution=False,
    context=[previous_tasks],
    output_json=None,
    output_pydantic=None,
    output_file='',
    callback=None
)
```

#### 3. `crew-crew` - Criar uma Equipe CrewAI Avançada

```python
from crewai import Crew, Process

crew = Crew(
    agents=[agents],
    tasks=[tasks],
    process=Process.sequential,
    verbose=2,
    memory=True,
    cache=True,
    max_rpm=10,
    share_crew=False,
    output_log_file='crew_log.txt',
    manager_llm=None,
    function_calling_llm=None,
    config=None,
    id='crew_id'
)
```

### 🛠️ Ferramentas

#### 4. `crew-simple-tool` - Criar uma Ferramenta Simples

```python
from crewai.tools import tool

@tool("Tool Name")
def my_simple_tool(question: str) -> str:
    """Tool description for clarity."""
    # Tool logic here
    return "Tool output"
```

#### 5. `crew-custom-tool` - Criar uma Ferramenta Personalizada com Schema

```python
from crewai.tools import BaseTool
from typing import Type
from pydantic import BaseModel, Field

class ToolNameSchema(BaseModel):
    """Input for ToolName."""
    parameter: str = Field(description="Parameter description")

class ToolName(BaseTool):
    name: str = "tool_name"
    description: str = "Tool description"
    args_schema: Type[BaseModel] = ToolNameSchema

    def _run(self, parameter: str) -> str:
        # Tool implementation
        return "result"
```

#### 6. `crew-browser-tool` - Ferramentas de Navegação Web

```python
from crewai_tools import (
    ScrapeWebsiteTool,
    SeleniumScrapingTool,
    WebsiteSearchTool
)

# Scrape website content
scrape_tool = ScrapeWebsiteTool()

# Advanced scraping with Selenium
selenium_tool = SeleniumScrapingTool()

# Search within website
search_tool = WebsiteSearchTool()
```

#### 7. `crew-search-tool` - Ferramenta de Busca na Internet

Ferramenta para busca na web usando Serper API.

#### 8. `crew-file-tools` - Ferramentas de Manipulação de Arquivos

Ferramentas para leitura, escrita e manipulação de arquivos.

### 🤖 Configuração de LLM

#### 9. `crew-llm` - Configurar LLM

```python
from crewai import LLM

# Configure LLM
llm = LLM(
    model="gpt-4",
    temperature=0.7,
    base_url="",
    api_key=""
)
```

### 📚 Base de Conhecimento

#### 10. `crew-knowledge-text` - Fonte de Conhecimento de Texto

Base de conhecimento a partir de texto simples.

#### 11. `crew-knowledge-pdf` - Fonte de Conhecimento PDF

Base de conhecimento a partir de arquivos PDF.

### 🔄 Funcionalidades Avançadas

#### 12. `crew-pipeline` - Criar Pipeline CrewAI

```python
from crewai import Pipeline

pipeline = Pipeline(
    stages=[crews],
    verbose=True
)

result = pipeline.kickoff(inputs={})
```

#### 13. `crew-flow` - Criar Flow CrewAI

```python
from crewai.flow import Flow, start, listen

class FlowName(Flow):
    @start()
    def initial_method(self):
        """Initial flow method"""
        return "initial_result"

    @listen(initial_method)
    def next_method(self, result):
        """Next flow method"""
        return "final_result"

# Run the flow
flow = FlowName()
result = flow.kickoff()
```

#### 14. `crew-train` - Treinamento e Teste

Configuração para treinamento e teste de equipes CrewAI.

#### 15. `crew-memory` - Configuração de Memória

Configuração de memória para agentes e equipes.

### 📁 Templates de Projeto

#### 16. `crew-basic-setup` - Setup Básico Completo

Cria um projeto CrewAI completo com agentes, tarefas e execução.

#### 17. `crew-hierarchical` - Processo Hierárquico

Implementa um processo hierárquico com agente gerente e trabalhadores especializados.

## 📦 Instalação

1. Abra o VS Code
2. Vá para a aba de Extensions (Ctrl+Shift+X)
3. Procure por "CrewAI Snippets"
4. Clique em Install

## 🔧 Como Usar

1. Abra um arquivo Python (`.py`)
2. Digite o prefixo do snippet (ex: `crew-agent`)
3. Pressione Tab ou Enter para expandir o snippet
4. Use Tab para navegar entre os placeholders
5. Preencha os valores conforme necessário

## 📝 Lista Completa de Snippets

| Prefixo               | Descrição                           |
| --------------------- | ----------------------------------- |
| `crew-agent`          | Agente CrewAI completo              |
| `crew-task`           | Tarefa CrewAI completa              |
| `crew-crew`           | Equipe CrewAI avançada              |
| `crew-simple-tool`    | Ferramenta simples                  |
| `crew-custom-tool`    | Ferramenta personalizada com schema |
| `crew-browser-tool`   | Ferramentas de navegação web        |
| `crew-search-tool`    | Ferramenta de busca                 |
| `crew-file-tools`     | Ferramentas de arquivo              |
| `crew-llm`            | Configuração de LLM                 |
| `crew-knowledge-text` | Base de conhecimento de texto       |
| `crew-knowledge-pdf`  | Base de conhecimento PDF            |
| `crew-pipeline`       | Pipeline CrewAI                     |
| `crew-flow`           | Flow CrewAI                         |
| `crew-train`          | Treinamento e teste                 |
| `crew-memory`         | Configuração de memória             |
| `crew-basic-setup`    | Setup básico completo               |
| `crew-hierarchical`   | Processo hierárquico                |

## 🔗 Links Úteis

- [Documentação Oficial CrewAI](https://docs.crewai.com/)
- [GitHub CrewAI](https://github.com/crewAIInc/crewAI)
- [Exemplos CrewAI](https://github.com/crewAIInc/crewAI-examples)

## 🤝 Contribuindo

Se você quiser contribuir com novos snippets ou melhorias:

1. Fork este repositório
2. Crie uma branch para sua feature
3. Adicione seus snippets no arquivo `snippets/snippets.code-snippets`
4. Atualize o README se necessário
5. Abra um Pull Request

## 📄 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🐛 Bugs e Sugestões

Se encontrar bugs ou tiver sugestões, por favor abra uma [issue](https://github.com/yourusername/crewai-snippets/issues).

---

### Comunidade CrewAI

Feito com ❤️ para a comunidade CrewAI