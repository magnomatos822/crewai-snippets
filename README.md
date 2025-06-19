# CrewAI Snippets for VS Code

This extension provides a comprehensive collection of code snippets for CrewAI development in Visual Studio Code. CrewAI is a Python framework for orchestrating AI agents that work together as a team to solve complex tasks.

## 🚀 Features

This extension includes snippets for all major CrewAI functionalities:

### 📋 Basic Components

#### 1. `crew-agent` - Create a Complete CrewAI Agent

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

#### 2. `crew-task` - Create a Complete CrewAI Task

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

#### 3. `crew-crew` - Create an Advanced CrewAI Team

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

### 🛠️ Tools

#### 4. `crew-simple-tool` - Create a Simple Tool

```python
from crewai.tools import tool

@tool("Tool Name")
def my_simple_tool(question: str) -> str:
    """Tool description for clarity."""
    # Tool logic here
    return "Tool output"
```

#### 5. `crew-custom-tool` - Create a Custom Tool with Schema

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

#### 6. `crew-browser-tool` - Web Browsing Tools

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

#### 7. `crew-search-tool` - Internet Search Tool

Tool for web search using Serper API.

#### 8. `crew-file-tools` - File Manipulation Tools

Tools for reading, writing and file manipulation.

### 🤖 LLM Configuration

#### 9. `crew-llm` - Configure LLM

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

### 📚 Knowledge Base

#### 10. `crew-knowledge-text` - Text Knowledge Source

Knowledge base from plain text.

#### 11. `crew-knowledge-pdf` - PDF Knowledge Source

Knowledge base from PDF files.

### 🔄 Advanced Features

#### 12. `crew-pipeline` - Create CrewAI Pipeline

```python
from crewai import Pipeline

pipeline = Pipeline(
    stages=[crews],
    verbose=True
)

result = pipeline.kickoff(inputs={})
```

#### 13. `crew-flow` - Create CrewAI Flow

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

#### 14. `crew-train` - Training and Testing

Configuration for CrewAI team training and testing.

#### 15. `crew-memory` - Memory Configuration

Memory configuration for agents and teams.

### 📁 Project Templates

#### 16. `crew-basic-setup` - Complete Basic Setup

Creates a complete CrewAI project with agents, tasks and execution.

#### 17. `crew-hierarchical` - Hierarchical Process

Implements a hierarchical process with manager agent and specialized workers.

## 📦 Installation

1. Open VS Code
2. Go to the Extensions tab (Ctrl+Shift+X)
3. Search for "CrewAI Snippets"
4. Click Install

## 🔧 How to Use

1. Open a Python file (`.py`)
2. Type the snippet prefix (e.g. `crew-agent`)
3. Press Tab or Enter to expand the snippet
4. Use Tab to navigate between placeholders
5. Fill in the values as needed

## 📝 Complete Snippet List

| Prefix                | Description                     |
| --------------------- | ------------------------------- |
| `crew-agent`          | Complete CrewAI agent           |
| `crew-task`           | Complete CrewAI task            |
| `crew-crew`           | Advanced CrewAI team            |
| `crew-simple-tool`    | Simple tool                     |
| `crew-custom-tool`    | Custom tool with schema         |
| `crew-browser-tool`   | Web browsing tools              |
| `crew-search-tool`    | Search tool                     |
| `crew-file-tools`     | File tools                      |
| `crew-llm`            | LLM configuration               |
| `crew-knowledge-text` | Text knowledge base             |
| `crew-knowledge-pdf`  | PDF knowledge base              |
| `crew-pipeline`       | CrewAI pipeline                 |
| `crew-flow`           | CrewAI flow                     |
| `crew-train`          | Training and testing            |
| `crew-memory`         | Memory configuration            |
| `crew-basic-setup`    | Complete basic setup            |
| `crew-hierarchical`   | Hierarchical process            |

## 🔗 Useful Links

- [Official CrewAI Documentation](https://docs.crewai.com/)
- [CrewAI GitHub](https://github.com/crewAIInc/crewAI)
- [CrewAI Examples](https://github.com/crewAIInc/crewAI-examples)

## 🤝 Contributing

If you want to contribute with new snippets or improvements:

1. Fork this repository
2. Create a branch for your feature
3. Add your snippets to the `snippets/snippets.code-snippets` file
4. Update the README if necessary
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bugs and Suggestions

If you find bugs or have suggestions, please open an [issue](https://github.com/magnomatos822/crewai-snippets/issues).

---

### CrewAI Community

Made with ❤️ for the CrewAI community