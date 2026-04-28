## CT-WEB-COLETA-015 - Deve exigir autenticação para acessar o módulo de coleta

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Usuário não autenticado deve ser redirecionado para login |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Controle de Acesso

US  
> **Como** sistema  
> **Eu quero** exigir autenticação antes de acessar o módulo de coleta  
> **Para que** usuários não autorizados não manipulem dados  

---

### Cenário

**Dado** que não estou autenticado  
**Quando** tento acessar diretamente a rota `/coleta`  
**Então** o sistema deve bloquear o acesso  
**E** redirecionar para a tela de login