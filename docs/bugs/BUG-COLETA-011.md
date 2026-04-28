## BUG-COLETA-011 – Contagem de registros no upload em lote é inconsistente e variável

| Atributo | Descrição |
| --- | --- |
| **Caso de Teste Associado** | CT-WEB-COLETA-010 |
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
Ao realizar o **upload de arquivo em lote**, a mensagem de retorno informando o número de registros inseridos com sucesso apresenta valores inconsistentes e variáveis, mesmo quando o mesmo arquivo é enviado repetidamente. Isso indica falha na contagem real de registros processados ou divergência entre o processamento e a resposta exibida.

### Resultado esperado
- A contagem de registros inseridos deve ser **determinística e consistente**.
- O mesmo arquivo deve sempre retornar o **mesmo número de registros processados**.
- A mensagem exibida deve refletir exatamente os registros realmente persistidos no sistema.

### Resultado atual
- O sistema exibe mensagens como:
  - “X registros inseridos com sucesso”
- O valor de **X muda mesmo com o mesmo arquivo enviado novamente**.
- Não há consistência entre execuções do mesmo upload.

### Passos para reproduzir
1. Acessar a funcionalidade de upload em lote.
2. Enviar uma planilha válida com registros de coletas.
3. Anotar o número de registros exibidos na mensagem de sucesso.
4. Enviar exatamente a mesma planilha novamente.
5. Observar que o número de registros exibido é diferente do envio anterior.

## Evidências
![BUG-COLETA-011](evidencias/BUG-COLETA-011.mp4)

## Estratégias de Mitigação Sugeridas
- Garantir que a contagem de registros seja baseada no **resultado real do processamento no backend**.
- Revisar possíveis condições de concorrência ou processamento assíncrono sem controle de estado.
- Validar idempotência do upload de arquivo em lote.
- Sincronizar a resposta da API com o estado final de persistência dos dados.