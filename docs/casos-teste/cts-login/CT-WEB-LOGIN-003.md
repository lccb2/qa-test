## CT-WEB-LOGIN-003 - Deve exibir erro para usuário inexistente

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve informar falha de autenticação |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Login

US  
> **Como** visitante  
> **Eu quero** tentar acessar o sistema  
> **Para que** apenas usuários válidos entrem  

---

### Cenário: Deve exibir erro para usuário inexistente

**Dado** que estou na tela de login  
**Quando** informo um usuário inexistente  
**E** informo uma senha qualquer  
**Então** o sistema deve negar acesso  