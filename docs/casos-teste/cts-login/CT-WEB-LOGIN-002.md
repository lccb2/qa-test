## CT-WEB-LOGIN-002 - Deve bloquear login com senha incorreta

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Mensagem de erro informando credenciais inválidas |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Login

US  
> **Como** usuário cadastrado  
> **Eu quero** receber erro ao informar senha incorreta  
> **Para que** o sistema garanta segurança  

---

### Cenário: Deve bloquear login com senha incorreta

**Dado** que estou na página de login  
**Quando** informo usuário válido  
**E** informo senha incorreta  
**Então** o login deve ser recusado  
**E** deve ser exibida mensagem de erro  
