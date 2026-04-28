## BUG-COLETA-009 – Campo Observações não é exibido no histórico

| Atributo | Descrição |
| --- | --- |
| **Caso de Teste Associado** | CT-WEB-COLETA-008 |
| **Severidade** | Média |
| **Prioridade** | Alta |

## Reprodutibilidade
- [x] Sempre (100%)
- [ ] Intermitente
- [ ] Ocorreu uma vez

## Camada afetada
- [x] WEB
- [x] API
- [ ] CI/CD
- [x] Banco de Dados
- [x] Interface (UI)

## Descrição
O campo **Observações** é solicitado no momento do cadastro/envio da coleta, porém o conteúdo inserido não é exibido na tela de histórico. Isso gera inconsistência entre o dado armazenado e o dado apresentado ao usuário, dificultando a rastreabilidade e análise das coletas.

### Resultado esperado
- O conteúdo do campo **Observações** deve ser exibido corretamente no histórico de coletas.
- O valor deve ser persistido no banco de dados e refletido na interface.
- Mesmo que exista limitação de exibição, não deve haver ausência total do dado.

### Resultado atual
- O sistema solicita preenchimento do campo **Observações**.
- O dado não é exibido na tela de histórico.
- Não há feedback visual indicando erro ou ausência de persistência.

### Passos para reproduzir
1. Acessar a tela de cadastro/envio de coleta.
2. Preencher o campo **Observações** com qualquer texto (ex: "Teste de observação").
3. Salvar a coleta.
4. Acessar a tela de histórico.
5. Observar que o campo **Observações** não aparece na listagem ou detalhamento da coleta.

## Evidências
![BUG-COLETA-009](evidencias/BUG-COLETA-009.mp4)

## Estratégias de Mitigação Sugeridas
- Verificar se o campo está sendo corretamente persistido no backend.
- Garantir que o campo seja retornado na API de listagem do histórico.
- Mapear corretamente o atributo no frontend (binding/UI).