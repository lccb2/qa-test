## CT-WEB-COLETA-018 - Deve validar campos obrigatórios do CSV

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Arquivos com campos obrigatórios ausentes devem ser rejeitados |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Upload em Lote

US  
> **Como** sistema  
> **Eu quero** validar a estrutura do CSV  
> **Para que** dados incompletos não sejam importados  

---

### Cenário

**Dado** que estou na tela de upload em lote  
**Quando** envio um CSV sem coluna "ID do Beneficiário"  
**Então** o sistema deve rejeitar o arquivo  
**E** informar que campos obrigatórios estão ausentes