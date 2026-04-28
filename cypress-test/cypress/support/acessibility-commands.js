import rules from "../fixtures/axe-rules.json";

const severityIndicators = {
  minor: "⚪",
  moderate: "🟡",
  serious: "🟠",
  critical: "🔴",
};

function callback(violations) {

  let countMinor = 0;
  let countModerate = 0;
  let countSerious = 0;
  let countCritical = 0;

  let wcagViolations = [];
  let bestPracticeViolations = [];

  if (violations.length > 0) {
    Cypress.log({ name: "🚨 VIOLAÇÕES ENCONTRADAS", message: "" });
  }

  violations.forEach((violation) => {

    // Contagem por severidade
    if (violation.impact === "minor") countMinor++;
    if (violation.impact === "moderate") countModerate++;
    if (violation.impact === "serious") countSerious++;
    if (violation.impact === "critical") countCritical++;

    const rule = rules.find((r) => r.id === violation.id);

    let ruleDescription = "";
    let category = "unknown";

    if (rule) {
      ruleDescription = rule.descriptionTranslated;
      category = rule.category;
    } else {
      ruleDescription = violation.help;
    }

    // Separação por categoria
    if (category === "wcag") {
      wcagViolations.push(violation);
    }

    if (category === "best-practice") {
      bestPracticeViolations.push(violation);
    }

    // Log individual
    Cypress.log({
      name: `${severityIndicators[violation.impact]} ${violation.id}`,
      message: `[${ruleDescription}](${violation.helpUrl})`,
    });

    Cypress.log({
      name: "HTML",
      message: JSON.stringify(violation.nodes[0].html),
    });
  });

  // Logs resumo
  Cypress.log({ name: "🚨 IMPACTO E CRITICIDADE", message: "" });
  Cypress.log({ name: "Crítico:", message: countCritical });
  Cypress.log({ name: "Sério:", message: countSerious });
  Cypress.log({ name: "Moderado:", message: countModerate });
  Cypress.log({ name: "Menor:", message: countMinor });

  Cypress.log({ name: "🚨 CATEGORIA DOS ERROS", message: "" });
  Cypress.log({ name: "Erros WCAG:", message: wcagViolations.length });
  Cypress.log({ name: "Best Practices:", message: bestPracticeViolations.length });

  Cypress.log({ name: "----------------------------", message: "" });

  // Exporta relatório completo (tudo)
  if (violations.length) {
    cy.task("generateA11yReport", violations);
  }

  // ❗ REGRA DE FALHA
  if (wcagViolations.length > 0) {
    throw new Error(
      `❌ Foram encontradas ${wcagViolations.length} violações WCAG (o teste falhou)`
    );
  }

  // ✅ Se só tiver best practices → passa
}

Cypress.Commands.add("pageAccessibility", () => {

  cy.injectAxe();

  [[1920, 1080], "macbook-11", "iphone-6", "ipad-mini"].forEach((size) => {

    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1]);
    } else {
      cy.viewport(size);
    }

    cy.checkA11y({}, {}, callback, true);

  });

});

Cypress.Commands.add("componentAccessibility", (selector) => {

  /*
  O parâmetro selector é um seletor CSS do elemento que irá ser testado.
  Exemplo:
  #container-ava > .home > .continue-onde-parou
  */

  cy.injectAxe();

  cy.checkA11y(selector, {}, callback, true);

});