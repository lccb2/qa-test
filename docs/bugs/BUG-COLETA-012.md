## BUG-COLETA-012 – Upload em lote aceita planilha com formato inválido sem validação

| Atributo | Descrição |
| --- | --- |
| **Caso de Teste Associado** | CT-WEB-COLETA-011, CT-WEB-COLETA-018 |
| **Severidade** | Alta |
| **Prioridade** | Alta |

## Reprodutibilidade
- [x] Sempre (100%)
- [ ] Intermitente
- [ ] Ocorreu uma vez

## Camada afetada
- [x] WEB
- [x] API
- [x] Dados/Ambiente
- [ ] CI/CD

## Descrição
O sistema permite o envio de arquivos de upload em lote mesmo quando a planilha possui estrutura inválida ou não corresponde ao formato esperado (schema JSON definido). Não há validação suficiente para garantir que as colunas obrigatórias estejam presentes ou que o formato dos dados esteja correto, resultando na aceitação indevida de arquivos inconsistentes.

### Resultado esperado
- O sistema deve validar a estrutura do arquivo antes do processamento.
- Arquivos com formato inválido devem ser rejeitados.
- O usuário deve receber uma mensagem clara informando incompatibilidade com o schema esperado.
- Nenhum dado deve ser processado caso o arquivo não siga o padrão definido.

### Resultado atual
- O sistema aceita arquivos que não seguem o formato esperado.
- Planilhas com estrutura totalmente diferente do schema são processadas ou enviadas sem erro.
- Não há validação prévia eficaz da estrutura do arquivo.

### Passos para reproduzir
1. Acessar a funcionalidade de upload em lote.
2. Criar ou utilizar uma planilha com estrutura inválida (ex: colunas diferentes do esperado ou sem relação com o schema).
3. Realizar o upload do arquivo.
4. Observar que o sistema aceita o arquivo sem rejeição.
5. Verificar inconsistência no processamento ou ausência de validação de erro.

## Evidências
![BUG-COLETA-012](evidencias/BUG-COLETA-012.mp4)

## Estratégias de Mitigação Sugeridas
- Implementar validação rigorosa de schema no backend antes do processamento.
- Validar presença e tipo das colunas obrigatórias.
- Rejeitar arquivos fora do padrão esperado com mensagens de erro claras.