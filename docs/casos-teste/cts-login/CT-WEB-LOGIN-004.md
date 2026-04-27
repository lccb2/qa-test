## CT-WEB-LOGIN-004 - Deve validar campos vazios

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve impedir envio |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Login

US  
> **Como** usuário  
> **Eu quero** que o sistema valide campos obrigatórios  
> **Para que** não sejam enviados dados incompletos  

---

### Cenário: Deve validar campos vazios

**Dado** que estou na tela de login  
**Quando** não preencho usuário  
**E** não preencho senha  
**Então** o sistema deve bloquear o login