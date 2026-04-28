## BUG-COLETA-010 – Upload de arquivo em lote não aparece no histórico

| Atributo | Descrição |
| --- | --- |
| **Caso de Teste Associado** | CT-WEB-COLETA-010, CT-WEB-COLETA-012 |
| **Severidade** | Alta |
| **Prioridade** | Alta |

## Reprodutibilidade
- [x] Sempre (100%)
- [ ] Intermitente
- [ ] Ocorreu uma vez

## Camada afetada
- [x] WEB
- [x] API
- [x] Banco de Dados
- [x] Dados/Ambiente

## Descrição
Ao realizar o **upload de arquivo em lote (planilha CSV/Excel)**, as coletas processadas não são exibidas no **histórico**, mesmo após o envio bem-sucedido do arquivo. Isso gera inconsistência entre o processamento da importação e a visualização dos dados no sistema.

### Resultado esperado
- Todas as coletas geradas via upload em lote devem ser exibidas no histórico.
- O sistema deve persistir corretamente os registros criados a partir da planilha.
- O histórico deve refletir os dados importados de forma consistente e imediata ou após processamento.

### Resultado atual
- O upload do arquivo em lote é realizado com sucesso.
- As coletas processadas não aparecem no histórico.
- Não há indicação de erro durante o envio, apenas ausência dos registros.

### Passos para reproduzir
1. Acessar a funcionalidade de **upload em lote**.
2. Enviar uma planilha válida (CSV/Excel) com registros de coletas.
3. Aguardar o processamento do arquivo.
4. Acessar o **histórico de coletas**.
5. Observar que os registros importados não são exibidos.

## Evidências
![BUG-COLETA-010](evidencias/BUG-COLETA-010.mp4)

## Estratégias de Mitigação Sugeridas
- Verificar se o backend está persistindo corretamente os registros do upload em lote.
- Garantir que os dados importados sejam indexados para o histórico.
- Criar validação de integração entre módulo de upload e listagem do histórico.