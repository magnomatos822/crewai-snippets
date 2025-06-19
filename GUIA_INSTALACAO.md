# Guia de Instalação e Teste - CrewAI Snippets

## 📦 Instalação da Extensão

### Opção 1: Instalação via arquivo VSIX (Recomendado para teste)

1. Abra o VS Code
2. Pressione `Ctrl+Shift+P` para abrir a paleta de comandos
3. Digite `Extensions: Install from VSIX...`
4. Selecione o arquivo `crewai-snippets-0.0.4.vsix`
5. Reinicie o VS Code se solicitado

### Opção 2: Via VS Code Marketplace (Quando publicado)

1. Abra o VS Code
2. Vá para a aba Extensions (`Ctrl+Shift+X`)
3. Procure por "CrewAI Snippets"
4. Clique em Install

## 🧪 Como Testar os Snippets

### 1. Criar um arquivo Python de teste

1. Crie um novo arquivo com extensão `.py`
2. Salve como `test_crewai.py`

### 2. Testar snippets básicos

Digite os seguintes prefixos e pressione `Tab`:

#### Componentes Básicos
- `crew-agent` → Cria um agente CrewAI completo
- `crew-task` → Cria uma tarefa CrewAI completa  
- `crew-crew` → Cria uma equipe CrewAI avançada

#### Ferramentas
- `crew-simple-tool` → Ferramenta simples com decorator @tool
- `crew-custom-tool` → Ferramenta personalizada com schema
- `crew-browser-tool` → Ferramentas de navegação web
- `crew-search-tool` → Ferramenta de busca na internet
- `crew-file-tools` → Ferramentas de manipulação de arquivos

#### Configuração
- `crew-llm` → Configuração de LLM

#### Recursos Avançados
- `crew-pipeline` → Pipeline CrewAI
- `crew-flow` → Flow CrewAI
- `crew-knowledge-text` → Base de conhecimento de texto
- `crew-knowledge-pdf` → Base de conhecimento PDF
- `crew-train` → Treinamento e teste
- `crew-memory` → Configuração de memória

#### Templates de Projeto
- `crew-basic-setup` → Setup básico completo
- `crew-hierarchical` → Processo hierárquico

### 3. Navegação entre campos

Após inserir um snippet:
1. Use `Tab` para navegar entre os campos editáveis
2. Use `Shift+Tab` para voltar ao campo anterior
3. Pressione `Esc` para sair do modo de edição do snippet

## ✅ Verificações de Funcionamento

### Teste Básico
```python
# 1. Digite "crew-agent" e pressione Tab
# 2. Preencha os campos usando Tab para navegar
# 3. Verifique se o código gerado está correto
```

### Teste de Integração
```python
# 1. Use "crew-agent" para criar um agente
# 2. Use "crew-task" para criar uma tarefa
# 3. Use "crew-crew" para criar uma equipe
# 4. Verifique se os snippets se complementam
```

## 🐛 Solução de Problemas

### Snippet não aparece
- Verifique se está em um arquivo `.py`
- Certifique-se de que a extensão está instalada e habilitada
- Reinicie o VS Code

### Snippet não expande
- Pressione `Tab` após digitar o prefixo
- Verifique se não há conflito com outras extensões
- Tente `Ctrl+Space` para forçar o IntelliSense

### Campos não navegáveis
- Use apenas `Tab` para navegar entre campos
- Não clique com mouse durante a edição do snippet

## 📊 Métricas de Teste

- ✅ **17 snippets** implementados
- ✅ **JSON válido** - sem erros de sintaxe
- ✅ **Tamanho otimizado** - 28.37KB
- ✅ **Compatibilidade** - VS Code 1.95.0+

## 🚀 Próximos Passos

1. **Teste todos os snippets** listados acima
2. **Verifique a sintaxe** do código gerado
3. **Teste a navegação** entre campos com Tab
4. **Reporte problemas** se encontrados
5. **Documente melhorias** sugeridas

---

**Status:** ✅ Extensão pronta para uso e teste!
