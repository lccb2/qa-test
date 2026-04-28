# 🧪 Automação de Testes em Cypress - V-Lab

![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![QA](https://img.shields.io/badge/Quality-Assurance-blue)

Repositório de automação de testes **End-to-End (E2E)** utilizando Cypress, estruturado com foco em **qualidade de software, rastreabilidade de bugs e estratégia baseada em risco**.

Este projeto simula um ambiente real de QA, com organização profissional de testes, documentação e análise de criticidade.

---

## 🚀 Visão Geral

Este repositório foi desenvolvido com foco em:

- 🤖 Automação de testes E2E com Cypress
- 🧠 Estratégia de testes baseada em risco
- 🐞 Registro e rastreabilidade de bugs
- 📚 Documentação estruturada de QA
- 🔄 Prevenção de regressões em funcionalidades críticas

---

## 📁 Estrutura do Projeto

```
repo/
├─ cypress-test/
│ ├─ cypress/ → Testes E2E organizados por fluxos
│ ├─ cypress.config.js → Configuração do Cypress
│ ├─ package.json → Dependências e scripts
│
├─ docs/
│ ├─ bugs/ → Registro de bugs encontrados durante execução
│ ├─ casos-teste/ → Cenários de teste e documentação
│ ├─ matriz-risco.xlsx → Análise de risco para priorização de testes
```


---

## 🧠 Estratégia de Qualidade

Este projeto segue uma abordagem moderna de QA:

### 🔄 Testes de Regressão
Garantia de que novas alterações não quebram funcionalidades existentes.

### ⚠️ Risk-Based Testing
Priorização de cenários com base na matriz de risco.

### 🧭 Cobertura de Fluxos Reais
Testes simulam comportamento real do usuário final.

---

## 📊 Matriz de Risco

Local: `docs/matriz-risco.xlsx`

A matriz é utilizada para:

- Definir prioridade de automação
- Identificar áreas críticas da aplicação
- Direcionar esforço de testes
- Reduzir impacto de falhas em produção

---

## 🐞 Gestão de Bugs

Todos os bugs identificados são documentados em:
`docs/bugs/`


Cada bug contém:

- Descrição detalhada do problema
- Passos para reprodução
- Evidências
- Severidade e prioridade
- Impacto no sistema
- Opções de mitigação
- Resultado esperado e atual

---

## 📋 Casos de Teste

Local: `docs/casos-teste/`

Contém:

- Cenários positivos e negativos
- Casos de teste documentados em Gherkin (BDD)
- Fluxos críticos de usuário
- Regras de integridade de dados

---

## 🐳 Execução com Docker

Este projeto foi testado em ambiente isolado via Docker.

![docker](/docs/bugs/evidencias/image.png)
![print](/docs/bugs/evidencias/image2.png)

---

## ♿ Testes de Acessibilidade (Axe + WCAG)

Este projeto utiliza Cypress + Axe-core para validação de acessibilidade.

### 🔎 O que é validado:
- Contraste de cores
- Navegação por teclado
- Estrutura semântica
- Conformidade com diretrizes WCAG
---

## ⚙️ Instalação e Execução

### 1️⃣ Instalar dependências

```
cd cypress-test
npm install
```
### 2️⃣ Abrir Cypress (modo interativo)

```
npx cypress open
```

### 3️⃣ Executar testes (modo headless)
```
npx cypress run
```

---

## 💡 Diferenciais do Projeto
- 🧱 Page Objects (quando aplicável)
- 🐳 Docker para ambiente isolado
- ♿ Testes de acessibilidade com WCAG + Axe
- 📊 Estratégia baseada em risco real
- 📚 Documentação completa (BDD + casos + bugs)

---

## 📚 Observação

Este repositório simula um ambiente real de QA em produção, com foco em:

> qualidade contínua, prevenção de falhas e escalabilidade de testes automatizados.

---

> Author @lccb2