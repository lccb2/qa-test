## CT-WEB-LOGIN-001 - Deve permitir login com usuário e senha válidos

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Login realizado com sucesso e redirecionamento para dashboard |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Login

US  
> **Como** usuário cadastrado  
> **Eu quero** realizar login na plataforma  
> **Para que** eu possa acessar o sistema  

---

### Cenário: Deve permitir login com usuário e senha válidos

**Dado** que estou na página de login  
**E** possuo um usuário válido  
**Quando** informo usuário e senha corretos  
**Então** devo ser autenticado no sistema  
**E** devo ser redirecionado para o dashboard 