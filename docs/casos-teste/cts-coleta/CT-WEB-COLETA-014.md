## CT-WEB-COLETA-014 - Deve impedir visualização de coletas de outros usuários

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Usuário deve visualizar apenas suas próprias coletas |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Histórico de Coletas

US  
> **Como** usuário do sistema  
> **Eu quero** visualizar apenas minhas coletas  
> **Para que** dados de outros usuários não sejam expostos  

---

### Cenário

**Dado** que existem coletas registradas por usuários diferentes  
**Quando** acesso a página de histórico  
**Então** o sistema deve exibir apenas coletas do usuário autenticado  
**E** não deve exibir dados de outros usuários