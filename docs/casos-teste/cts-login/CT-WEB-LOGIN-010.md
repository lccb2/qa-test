## CT-WEB-LOGIN-010 - Não deve persistir na sessão quando "Lembrar-me" não estiver selecionado

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Usuário deve ser deslogado ao fechar o navegador caso a opção "Lembrar-me" não esteja marcada |
| **Prioridade** | Média |
| **Tipo de Teste** | Manual |

### Funcionalidade: Login

US  
> **Como** usuário  
> **Eu quero** que minha sessão não seja mantida quando não selecionar "Lembrar-me"  
> **Para que** minha conta permaneça segura ao utilizar dispositivos compartilhados  

---

### Cenário: Não deve persistir na sessão quando "Lembrar-me" não estiver selecionado

**Dado** que estou na página de login  
**E** possuo credenciais válidas  
**Quando** informo usuário e senha corretos  
**E** não marco a opção "Lembrar-me"  
**E** realizo login no sistema  
**Então** o sistema deve autenticar o usuário com sucesso  
**Quando** fecho completamente o navegador  
**E** abro novamente a aplicação  
**Então** o sistema deve solicitar login novamente  
**E** o usuário não deve estar autenticado