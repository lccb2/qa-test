## CT-WEB-LOGIN-006 - Deve impedir XSS no campo usuário

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Script não deve ser executado |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Segurança

US  
> **Como** administrador do sistema  
> **Eu quero** que entradas de usuário sejam sanitizadas  
> **Para que** scripts maliciosos não sejam executados  

---

### Cenário: Deve impedir XSS no campo usuário

**Dado** que estou na tela de login  
**Quando** insiro `<script>alert(1)</script>` no campo usuário  
**Então** o sistema deve sanitizar a entrada 