## CT-WEB-LOGIN-007 - Deve impedir acesso ao dashboard sem login

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Usuário deve ser redirecionado para login |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Controle de Acesso

US  
> **Como** visitante  
> **Eu quero** que páginas protegidas exijam login  
> **Para que** o sistema mantenha segurança  

---

### Cenário: Deve impedir acesso ao dashboard sem login

**Dado** que nunca me autentiquei com Lembrar-me
**E** não estou autenticado no momento
**Quando** tento acessar a URL do dashboard diretamente  
**Então** o sistema deve redirecionar para login  
