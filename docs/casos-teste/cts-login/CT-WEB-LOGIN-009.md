## CT-WEB-LOGIN-009 - Deve manter usuário autenticado quando "Lembrar-me" estiver ativado

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Usuário permanece autenticado após recarregar ou reabrir a aplicação |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Login

US  
> **Como** usuário  
> **Eu quero** selecionar a opção "Lembrar-me" ao fazer login  
> **Para que** eu não precise inserir minhas credenciais novamente ao retornar ao sistema  

---

### Cenário: Deve manter usuário autenticado quando "Lembrar-me" estiver ativado

**Dado** que estou na página de login  
**E** possuo credenciais válidas  
**Quando** informo usuário e senha corretos  
**E** marco a opção "Lembrar-me"  
**E** realizo login no sistema  
**Então** o sistema deve autenticar o usuário com sucesso  
**E** ao recarregar a página ou reabrir a aplicação o usuário deve permanecer autenticado