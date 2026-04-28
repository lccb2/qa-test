## CT-WEB-COLETA-011 - Deve impedir upload de arquivo inválido

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve rejeitar arquivo inválido |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Upload em lote

US  
> **Como** sistema  
> **Eu quero** validar o tipo de arquivo  
> **Para que** evitar uploads maliciosos  

---

### Cenário: Deve impedir upload de arquivo inválido

**Dado** que estou na tela de upload  
**Quando** envio arquivo com extensão .exe ou .js  
**Então** o sistema deve bloquear o upload