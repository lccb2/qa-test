## CT-WEB-COLETA-010 - Deve permitir upload de arquivo CSV válido

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Upload realizado com sucesso |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Coleta em Lote

US  
> **Como** usuário  
> **Eu quero** enviar um arquivo CSV com dados de beneficiários  
> **Para que** registrar múltiplos indicadores rapidamente  

---

### Cenário: Deve permitir upload de arquivo CSV válido

**Dado** que estou na tela de coleta em lote  
**Quando** seleciono um arquivo CSV válido  
**E** clico em "Fazer Upload"  
**Então** o sistema deve processar o arquivo