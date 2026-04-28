## CT-WEB-COLETA-004 - Deve validar limite do campo nome

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve limitar tamanho do nome |
| **Prioridade** | Média |
| **Tipo de Teste** | Manual |

### Funcionalidade: Coleta Individual

US  
> **Como** sistema  
> **Eu quero** limitar o tamanho do campo nome  
> **Para que** evitar dados inconsistentes  

---

### Cenário: Deve validar limite do campo nome

**Dado** que estou na tela de coleta  
**Quando** insiro um nome maior que o limite permitido  
**Então** o sistema deve impedir a submissão