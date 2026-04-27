## CT-WEB-COLETA-005 - Deve validar taxa de conclusão entre 0 e 100

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve aceitar apenas valores entre 0 e 100 |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Indicadores de Desempenho

US  
> **Como** sistema  
> **Eu quero** validar o intervalo da taxa de conclusão  
> **Para que** indicadores inválidos não sejam registrados  

---

### Cenário: Deve validar taxa de conclusão entre 0 e 100

**Dado** que estou na tela de coleta  
**Quando** insiro valor negativo ou maior que 100  
**Então** o sistema deve impedir submissão