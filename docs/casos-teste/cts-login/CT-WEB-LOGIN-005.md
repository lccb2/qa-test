## CT-WEB-LOGIN-005 - Deve impedir SQL Injection

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve rejeitar entrada maliciosa |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Segurança

US  
> **Como** administrador do sistema  
> **Eu quero** que entradas sejam protegidas contra ataques  
> **Para que** o sistema não seja comprometido  

---

### Cenário: Deve impedir SQL Injection

**Dado** que estou na tela de login  
**Quando** informo `' OR 1=1 --` no campo usuário  
**Então** o login deve ser negado  