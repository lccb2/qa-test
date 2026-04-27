## CT-WEB-COLETA-008 - Deve validar campo observações contra XSS

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve sanitizar entradas |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Segurança

US  
> **Como** administrador do sistema  
> **Eu quero** proteger campos de entrada contra scripts maliciosos  
> **Para que** evitar ataques XSS  

---

### Cenário: Deve validar campo observações contra XSS

**Dado** que estou na tela de coleta  
**Quando** insiro `<script>alert(1)</script>` no campo observações  
**Então** o sistema não deve executar o script  
**E** deve sanitizar o conteúdo