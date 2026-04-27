## CT-WEB-COLETA-006 - Deve validar frequência entre 0 e 100

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve aceitar valores válidos |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Indicadores de Desempenho

US  
> **Como** sistema  
> **Eu quero** validar o percentual de frequência  
> **Para que** evitar valores inconsistentes  

---

### Cenário: Deve validar frequência entre 0 e 100

**Dado** que estou na tela de coleta  
**Quando** insiro valor maior que 100%  
**Então** o sistema deve impedir envio