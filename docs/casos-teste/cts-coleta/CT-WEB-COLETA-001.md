## CT-WEB-COLETA-001 - Deve registrar coleta individual com dados válidos

| Atributo | Descrição |
|---|---|
| **Status Esperado** | Sistema deve salvar a coleta com sucesso |
| **Prioridade** | Crítica |
| **Tipo de Teste** | Auto |

### Funcionalidade: Coleta Individual

US  
> **Como** usuário autenticado  
> **Eu quero** registrar dados de desempenho de um beneficiário  
> **Para que** o sistema armazene os indicadores do projeto  

---

### Cenário: Deve registrar coleta individual com dados válidos

**Dado** que estou autenticado no sistema  
**E** acesso a página de coleta individual  
**Quando** preencho todos os campos obrigatórios com valores válidos  
**E** clico em "Submeter Coleta"  
**Então** o sistema deve salvar os dados  
**E** exibir mensagem de sucesso