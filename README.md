# CrewAI VSCode Extension

**Desenvolva, depure e gerencie seus projetos CrewAI com facilidade diretamente no VSCode!**

Esta extensão visa simplificar o fluxo de trabalho de desenvolvimento para o [CrewAI](https://www.crewai.com/), um poderoso framework Python para orquestrar agentes de IA colaborativos. Com esta ferramenta, você pode criar novos projetos, gerar componentes essenciais com snippets de código, executar e testar suas crews, interagir com elas via chat e visualizar logs, tudo dentro do seu editor favorito.

## Funcionalidades Implementadas

A extensão "CrewAI VSCode Extension" oferece os seguintes recursos:

*   **Criação de Projetos CrewAI:**
    *   **Novo Projeto de Crew:** Crie rapidamente a estrutura base para um novo projeto de Crew usando o comando `crewai create crew <nome_do_projeto>`.
    *   **Novo Projeto de Flow:** Crie a estrutura base para um novo projeto de Flow usando o comando `crewai create flow <nome_do_projeto>`.
*   **Snippets de Código Inteligentes:**
    *   Gere rapidamente código boilerplate para:
        *   `Agent` (prefixo: `crewai_agent`)
        *   `Task` (prefixo: `crewai_task`)
        *   `Crew` (prefixo: `crewai_crew`)
        *   `Tool` (customizado, prefixo: `crewai_tool`)
        *   `Flow` (estrutura básica, prefixo: `crewai_flow`)
*   **Execução de Crews e Flows:**
    *   Execute seu projeto CrewAI (crew ou flow) diretamente do VSCode usando o comando `crewai run` no diretório do projeto.
*   **Chat Interativo com Crews:**
    *   Inicie uma sessão de chat interativo com sua crew (`crewai chat`) para fornecer inputs e interagir em tempo real.
*   **Visualização de Logs de Tarefas:**
    *   Acesse os logs das últimas saídas de tarefas da sua crew (`crewai log-tasks-outputs`) para depuração e análise.
*   **Execução de Testes:**
    *   Execute os testes configurados para sua crew (`crewai test`) para garantir a qualidade e o comportamento esperado.

## Requisitos

1.  **Visual Studio Code:** Versão 1.80.0 ou superior.
2.  **CrewAI CLI:** O [CrewAI CLI](https://docs.crewai.com/concepts/cli/) deve estar instalado e configurado corretamente no PATH do seu sistema. Você pode instalar o CrewAI (que inclui a CLI) com:
    ```bash
    pip install crewai crewai-tools
    ```
3.  **Python:** Uma instalação funcional do Python (geralmente a mesma usada pelo seu projeto CrewAI).
4.  **Ambiente Virtual (Recomendado):** É altamente recomendável usar um ambiente virtual Python para seus projetos CrewAI para gerenciar dependências.

## Como Usar

Todos os comandos podem ser acessados através da Paleta de Comandos do VSCode (`Ctrl+Shift+P` ou `Cmd+Shift+P` em macOS).

1.  **`CrewAI: New Crew Project`**
    *   Abra a Paleta de Comandos.
    *   Digite e selecione `CrewAI: New Crew Project`.
    *   Insira o nome desejado para o seu projeto de crew quando solicitado.
    *   Um novo terminal será aberto e o comando `crewai create crew <nome_inserido>` será executado.
2.  **`CrewAI: New Flow Project`**
    *   Abra a Paleta de Comandos.
    *   Digite e selecione `CrewAI: New Flow Project`.
    *   Insira o nome desejado para o seu projeto de flow quando solicitado.
    *   Um novo terminal será aberto e o comando `crewai create flow <nome_inserido>` será executado.
3.  **Snippets de Código (Ex: `crewai_agent`)**
    *   Abra um arquivo Python (`.py`).
    *   Comece a digitar um dos prefixos de snippet (ex: `crewai_agent`, `crewai_task`).
    *   Selecione o snippet desejado na lista de sugestões e pressione `Enter` ou `Tab`.
    *   Use `Tab` para navegar pelos placeholders e preencher os valores.
4.  **`CrewAI: Run Crew/Flow`**
    *   Abra o arquivo Python principal do seu projeto CrewAI no editor.
    *   Abra a Paleta de Comandos.
    *   Digite e selecione `CrewAI: Run Crew/Flow`.
    *   Um novo terminal será aberto no diretório do seu arquivo, e o comando `crewai run` será executado.
5.  **`CrewAI: Start Chat Session`**
    *   Abra o arquivo Python principal do seu projeto CrewAI no editor.
    *   Abra a Paleta de Comandos.
    *   Digite e selecione `CrewAI: Start Chat Session`.
    *   Um novo terminal será aberto no diretório do seu arquivo, e o comando `crewai chat` será executado.
6.  **`CrewAI: View Task Outputs`**
    *   Abra o arquivo Python principal do seu projeto CrewAI no editor.
    *   Abra a Paleta de Comandos.
    *   Digite e selecione `CrewAI: View Task Outputs`.
    *   Um novo terminal será aberto no diretório do seu arquivo, e o comando `crewai log-tasks-outputs` será executado.
7.  **`CrewAI: Run Tests`**
    *   Abra um arquivo Python do seu projeto CrewAI ou tenha a pasta do projeto aberta no workspace.
    *   Abra a Paleta de Comandos.
    *   Digite e selecione `CrewAI: Run Tests`.
    *   Um novo terminal será aberto (no diretório do arquivo ativo ou na raiz do workspace), e o comando `crewai test` será executado.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório do projeto. (Link para o repositório a ser adicionado aqui quando disponível)

## Licença

Esta extensão é distribuída sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
