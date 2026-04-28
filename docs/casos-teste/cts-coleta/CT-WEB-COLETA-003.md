## CT-WEB-COLETA-003 - Deve validar que ID do beneficiário seja numérico

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve aceitar apenas números |
| **Prioridade** | Média |
| **Tipo de Teste** | Manual |

### Funcionalidade: Coleta Individual

US  
> **Como** sistema  
> **Eu quero** validar o formato do ID  
> **Para que** apenas valores válidos sejam registrados  

---

### Cenário: Deve validar que ID do beneficiário seja numérico

**Dado** que estou na tela de coleta  
**Quando** insiro letras ou símbolos no campo ID  
**Então** o sistema deve impedir o envio do formulário