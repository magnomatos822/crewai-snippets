# crewai-snippets
Snippets o CrewAI
=======
# CrewAI Snippets for VS Code

This extension provides a collection of code snippets for CrewAI development in Visual Studio Code. CrewAI is a Python framework for orchestrating role-playing AI agents.

## Features

This extension includes the following snippets for quick CrewAI development:

1. `crew-agent` - Create a CrewAI Agent
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

2. `crew-task` - Create a CrewAI Task
```python
task = Task(
    description='task_description',
    agent=agent,
    expected_output='expected_output',
    context='additional_context'
)
```

3. `crew-crew` - Create a CrewAI Crew
```python
crew = Crew(
    agents=[agents],
    tasks=[tasks],
    verbose=2
)
```

4. `crew-tool` - Create a CrewAI Tool
```python
@tool('tool_name')
def function_name(parameters):
    """tool_description"""
    pass
```

5. `crew-process` - Create a complete CrewAI process
```python
from crewai import Agent, Task, Crew

# Create agents
# Define your agents here

# Create tasks
# Define your tasks here

# Create crew
crew = Crew(
    agents=[agents],
    tasks=[tasks],
    verbose=2
)

# Start the process
result = crew.kickoff()
```

## Requirements

- Visual Studio Code 1.95.0 or higher
- Python extension for VS Code
- CrewAI library installed (`pip install crewai`)

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "CrewAI Snippets"
4. Click Install

## Usage

1. Open a Python file
2. Type one of the snippet prefixes (e.g., `crew-agent`)
3. Press Tab or Enter to insert the snippet
4. Use Tab to navigate through the placeholders and fill in your values

## License

This extension is licensed under the MIT License.

## Contributing

Feel free to contribute to this extension on [GitHub](https://github.com/yourusername/crewai-snippets).

## Release Notes

### 0.0.1

Initial release of CrewAI Snippets:
- Added basic snippets for Agents, Tasks, Crews, and Tools
- Added complete process template

