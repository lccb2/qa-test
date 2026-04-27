## CT-WEB-COLETA-016 - Não deve retornar sucesso para dados inválidos

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema não deve retornar sucesso se dados forem inválidos |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Coleta Individual

US  
> **Como** sistema  
> **Eu quero** validar dados antes de confirmar a coleta  
> **Para que** registros inconsistentes não sejam armazenados  

---

### Cenário

**Dado** que estou na tela de coleta  
**Quando** envio dados inválidos  
**Então** o sistema deve rejeitar a operação  
**E** não deve retornar mensagem de sucesso