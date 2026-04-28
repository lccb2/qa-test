## CT-WEB-COLETA-013 - Deve impedir acesso ao histórico sem autenticação

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Acesso negado |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Segurança

US  
> **Como** administrador do sistema  
> **Eu quero** proteger dados de coletas  
> **Para que** usuários não autorizados não tenham acesso  

---

### Cenário: Deve impedir acesso ao histórico sem autenticação

**Dado** que não estou autenticado  
**Quando** tento acessar a rota de histórico  
**Então** o sistema deve bloquear acesso