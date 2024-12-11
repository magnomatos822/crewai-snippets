Snippets do CrewAI
=======
# CrewAI Snippets for VS Code

Esta extensão fornece uma coleção de snippets de código para o desenvolvimento do CrewAI no Visual Studio Code. CrewAI é um framework Python para orquestrar agentes de IA em jogos de papéis.

## Funcionalidades

Esta extensão inclui os seguintes snippets para desenvolvimento rápido do CrewAI:

1. `crew-agent` - Criar um Agente CrewAI
```python
agent = Agent(
    role='role',
    goal='goal',
    backstory='agent_backstory',
    tools=[tools],
    verbose=True,
    allow_delegation=False
)
```

2. `crew-task` - Criar uma Tarefa CrewAI
```python
task = Task(
    description='task_description',
    agent=agent,
    expected_output='expected_output',
    context='additional_context'
)
```

3. `crew-crew` - Criar uma Equipe CrewAI
```python
crew = Crew(
    agents=[agents],
    tasks=[tasks],
    verbose=2
)
```

4. `crew-simple-tool` - Criar uma Ferramenta Simples CrewAI
```python
from crewai.tools import tool

@tool('tool_name')
def function_name(parameters):
    """tool_description"""
    pass
```

5. `crew-generic-process` - Criar um processo completo do CrewAI
```python
from crewai import Agent, Task, Crew, Process, TaskOutput, CrewOutput
import os
from crewai.tools import DirectoryReadTool, FileReadTool, SerperDevTool, WebsiteSearchTool

# Configurar chaves de API
os.environ["SERPER_API_KEY"] = "Your Key"  # serper.dev API key
os.environ["OPENAI_API_KEY"] = "Your Key"

# Instanciar ferramentas
docs_tool = DirectoryReadTool(directory='./blog-posts')
file_tool = FileReadTool()
search_tool = SerperDevTool()
web_rag_tool = WebsiteSearchTool()

# Definir seus agentes
agent1 = Agent(
    role='role1',
    goal='goal1',
    backstory='backstory1',
    cache=True,
    verbose=False,
    use_system_prompt=True,
    max_rpm=30,
    max_iter=5
)
agent2 = Agent(
    role='role2',
    goal='goal2',
    backstory='backstory2',
    cache=True,
    verbose=False,
    use_system_prompt=True,
    max_rpm=30,
    max_iter=5
)

# Definir suas tarefas
task1 = Task(
    description='description1',
    agent=agent1,
    expected_output='expected_output1'
)
task2 = Task(
    description='description2',
    agent=agent2,
    expected_output='expected_output2'
)

# Formar a equipe com um processo genérico
generic_crew = Crew(
    agents=[agent1, agent2],
    tasks=[task1, task2],
    process=Process.process_type,
    respect_context_window=True,
    memory=True,
    manager_agent=None,
    planning=True
)

# Executar a equipe
result = generic_crew.kickoff()

# Acessar a saída com tipagem segura
task_output: TaskOutput = result.tasks[0].output
crew_output: CrewOutput = result.output
```

## Requisitos

- Visual Studio Code 1.95.0 ou superior
- Extensão Python para VS Code
- Biblioteca CrewAI instalada (`pip install crewai`)

## Instalação

1. Abra o VS Code
2. Vá para Extensões (Ctrl+Shift+X)
3. Pesquise por "CrewAI Snippets"
4. Clique em Instalar

## Uso

1. Abra um arquivo Python
2. Digite um dos prefixos de snippet (por exemplo, `crew-agent`)
3. Pressione Tab ou Enter para inserir o snippet
4. Use Tab para navegar pelos placeholders e preencha seus valores

## Licença

Esta extensão está licenciada sob a Licença MIT.

## Contribuição

Sinta-se à vontade para contribuir com esta extensão no [GitHub](https://github.com/yourusername/crewai-snippets).

## Notas de Lançamento

### 0.0.1

Lançamento inicial dos Snippets CrewAI:
- Adicionados snippets básicos para Agentes, Tarefas, Equipes e Ferramentas
- Adicionado template de processo completo