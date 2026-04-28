## BUG-COLETA-004 – Campo Nome sem limite de caracteres

| Atributo | Descrição |
| --- | --- |
| **Caso de Teste Associado** | CT-WEB-COLETA-004, CT-WEB-COLETA-016 |
| **Severidade** | Média |
| **Prioridade** | Alta |

## Reprodutibilidade
- [x] Sempre (100%)
- [ ] Intermitente
- [ ] Ocorreu uma vez

## Camada afetada
- [x] WEB
- [x] API
- [x] Banco de Dados
- [x] Interface (UI)

## Descrição
O campo de Nome Completo não possui limite de caracteres no frontend nem no backend, permitindo a inserção de textos extremamente longos. Isso pode gerar inconsistência no banco de dados e risco de impacto em performance, além disso causa quebra de layout na tela de histórico de coletas, onde o nome ultrapassa os limites do componente e compromete a exibição da interface.

### Resultado esperado
- O campo Nome deve ter um limite máximo de caracteres definido conforme regra de negócio.
- O frontend deve impedir a inserção acima do limite.
- O backend deve validar e rejeitar entradas que excedam o tamanho permitido.
- A interface deve preservar o layout mesmo com dados longos.

### Resultado atual
- O sistema aceita nomes sem qualquer limitação de tamanho.
- O banco de dados pode armazenar valores excessivamente grandes.
- O histórico de coletas apresenta quebra de layout ao exibir nomes longos.

### Passos para reproduzir
1. Acessar a tela de cadastro/envio de coleta.
2. No campo Nome, inserir um texto muito longo (ex: 600 caracteres).
3. Salvar a coleta.
4. Acessar a tela de histórico.
5. Observar que o nome:
   - Ultrapassa o limite visual do componente
   - Quebra o layout da interface
   - Continua sendo exibido sem corte ou controle

## Evidências
![BUG-COLETA-004](evidencias/BUG-COLETA-004.mp4)

## Estratégias de Mitigação Sugeridas
- Definir limite máximo de caracteres para o campo Nome no frontend e backend.
- Ajustar banco de dados para refletir o limite definido (ex: VARCHAR adequado).
- Aplicar truncamento visual na UI para evitar quebra de layout.