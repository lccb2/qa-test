## BUG-COLETA-014 – Sessão permanece ativa após logout e dados sensíveis continuam acessíveis

| Atributo | Descrição |
| --- | --- |
| **Caso de Teste Associado** | CT-WEB-COLETA-001 |
| **Severidade** | Crítica |
| **Prioridade** | Crítica |

## Reprodutibilidade
- [x] Sempre (100%)
- [ ] Intermitente
- [ ] Ocorreu uma vez

## Camada afetada
- [x] WEB
- [x] API
- [x] Autenticação/Sessão
- [x] Dados/Ambiente

## Descrição
Após realizar o **logout**, o sistema não invalida corretamente a sessão do usuário. Mesmo após recarregar a página de login, ainda é possível visualizar dados persistidos localmente, incluindo informações sensíveis como objeto de usuário e status de autenticação (`loggedIn`). Isso indica falha no gerenciamento de sessão e possível persistência indevida em armazenamento local (ex: localStorage/sessionStorage).

### Resultado esperado
- Ao realizar logout, a sessão do usuário deve ser completamente invalidada.
- Dados sensíveis não devem permanecer acessíveis no frontend após logout.
- O estado de autenticação (`loggedIn`) deve ser atualizado corretamente para `false`.
- Informações como usuário, token ou credenciais não devem permanecer armazenadas no cliente.

### Resultado atual
- Após logout, os dados ainda permanecem acessíveis no frontend:
  - `user: {"id":1,"username":"admin","email":"admin@test.com","role":"admin","password":"admin123"}`
  - `loggedIn: true`
- Mesmo após recarregar a página de login, os dados continuam visíveis.
- A sessão não é invalidada corretamente.

### Passos para reproduzir
1. Realizar login no sistema com um usuário válido.
2. Efetuar logout.
3. Acessar novamente a página de login.
4. Recarregar a página (F5).
5. Inspecionar estado local.
6. Observar que:
   - Dados do usuário ainda estão presentes
   - `loggedIn` permanece como `true`

## Evidências
- Objeto de usuário persistido:
```json
  {"id":1,"username":"admin","email":"admin@test.com","role":"admin","password":"admin123"}
```
- Estado de autenticação:
```json
  loggedIn: true 
```
