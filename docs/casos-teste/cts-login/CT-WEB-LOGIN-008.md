## CT-WEB-LOGIN-008 - Deve implementar validação de máximo de caracteres no front

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve impedir número exorbitante de caracteres nos campos de login |
| **Prioridade** | Média |
| **Tipo de Teste** | Manual |

### Funcionalidade: Login

US  
> **Como** usuário  
> **Eu quero** que o sistema valide o máximo de caracteres nos campos de login  
> **Para que** entradas inválidas ou excessivas não sejam enviadas ao sistema e evitar possíveis problemas de segurança ou performance  

---

### Cenário: Deve implementar validação de máximo de caracteres no front

**Dado** que estou na página de login  
**E** o campo de usuário possui limite máximo definido  
**Quando** insiro uma quantidade de caracteres maior que o permitido no campo usuário ou senha  
**Então** o sistema deve impedir o envio do formulário  
**E** deve exibir uma mensagem informando que o limite de caracteres foi excedido