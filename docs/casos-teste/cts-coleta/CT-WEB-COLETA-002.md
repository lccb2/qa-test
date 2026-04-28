## CT-WEB-COLETA-002 - Deve validar campo ID do beneficiário obrigatório

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve impedir submissão |
| **Prioridade** | Alta |
| **Tipo de Teste** | Auto |

### Funcionalidade: Coleta Individual

US  
> **Como** usuário  
> **Eu quero** que campos obrigatórios sejam validados  
> **Para que** dados incompletos não sejam enviados  

---

### Cenário: Deve validar campo ID do beneficiário obrigatório

**Dado** que estou na tela de coleta  
**Quando** deixo o campo ID vazio  
**E** tento submeter o formulário  
**Então** o sistema deve impedir a submissão  
**E** informar que o campo é obrigatório