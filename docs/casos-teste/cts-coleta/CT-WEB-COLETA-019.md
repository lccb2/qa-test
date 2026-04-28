## CT-WEB-COLETA-019 - Não deve duplicar coleta em envio

| Atributo | Descrição |
|---|---|
| **Status Esperado** | O sistema não deve permitir a duplicação de uma mesma coleta em envios repetidos |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Coleta

US  
> **Como** sistema  
> **Eu quero** evitar duplicidade de registros de coleta  
> **Para que** os dados permaneçam consistentes e confiáveis  

---

### Cenário

**Dado** que estou na tela de registro de coleta  
**E** já existe uma coleta previamente enviada com os mesmos dados  
**Quando** tento enviar novamente a mesma coleta  
**Então** o sistema deve impedir a duplicação do registro  
**E** deve manter apenas um registro da coleta no banco de dados  
**E** deve exibir uma mensagem informando que a coleta já foi registrada anteriormente