# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [0.0.4] - 2025-05-31

### ✨ Adicionado
- **Novos Snippets Principais:**
  - `crew-llm` - Configuração de LLM personalizada
  - `crew-custom-tool` - Ferramenta personalizada com schema Pydantic
  - `crew-browser-tool` - Ferramentas de navegação web (ScrapeWebsiteTool, SeleniumScrapingTool, WebsiteSearchTool)
  - `crew-search-tool` - Ferramenta de busca SerperDev
  - `crew-file-tools` - Ferramentas de manipulação de arquivos
  
- **Base de Conhecimento:**
  - `crew-knowledge-text` - Fonte de conhecimento de texto
  - `crew-knowledge-pdf` - Fonte de conhecimento PDF
  
- **Funcionalidades Avançadas:**
  - `crew-pipeline` - Pipeline para múltiplas crews
  - `crew-flow` - Flow com decoradores @start e @listen
  - `crew-train` - Treinamento e teste de crews
  - `crew-memory` - Configuração de sistemas de memória (LongTerm/ShortTerm)
  
- **Templates de Projeto:**
  - `crew-basic-setup` - Setup completo de projeto CrewAI
  - `crew-hierarchical` - Processo hierárquico com gerente

### 🔄 Melhorado
- **Agent (crew-agent):** Adicionadas todas as novas propriedades da API atual:
  - `llm`, `memory`, `system_template`, `prompt_template`, `response_template`
  - Melhor configuração de rate limiting e iterações
  
- **Task (crew-task):** Funcionalidades expandidas:
  - `async_execution`, `context`, `output_json`, `output_pydantic`
  - `output_file`, `callback` para maior flexibilidade
  
- **Crew (crew-crew):** Configuração avançada:
  - `memory`, `cache`, `share_crew`, `output_log_file`
  - `manager_llm`, `function_calling_llm`, `config`, `id`
  - Suporte a Process.sequential e Process.hierarchical

### 📚 Documentação
- README.md completamente reescrito com:
  - Organização por categorias
  - Exemplos de código para cada snippet
  - Tabela completa de snippets disponíveis
  - Links úteis e guias de contribuição
  
- package.json atualizado com:
  - Palavras-chave expandidas
  - Descrição melhorada
  - Comandos preparados para futuras funcionalidades

### 🎯 Alinhamento com CrewAI
- Todos os snippets agora seguem a documentação oficial mais recente
- Suporte às funcionalidades mais novas como Flows, Pipelines e Knowledge Base
- Integração com ferramentas oficiais do ecossistema CrewAI

## [0.0.3] - Versão Anterior
- Snippets básicos para Agent, Task, Crew e Tool
- Funcionalidade básica de snippets

---

**Nota:** Esta versão representa uma atualização major com foco em alinhar a extensão com todas as funcionalidades atuais do CrewAI framework.