## CT-WEB-COLETA-007 - Deve validar limite da nota de avaliação

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Nota deve estar entre 0 e 10 |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Indicadores de Desempenho

US  
> **Como** sistema  
> **Eu quero** validar a nota máxima permitida  
> **Para que** evitar valores inválidos  

---

### Cenário: Deve validar limite da nota de avaliação

**Dado** que estou na tela de coleta  
**Quando** informo nota maior que 10  
**Então** o sistema deve impedir envio