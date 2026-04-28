import loginPage from "../../support/pages/loginPage";

const usuario = 'user';
const senha = 'user123';

beforeEach(() => {
    cy.visit('/');
});

describe('Teste de acessibilidade', () => {
  it('Não deve ter violações de acessibilidade', () => {
    cy.visit('/');

    cy.pageAccessibility();
    cy.injectAxe();
    cy.checkA11y(); 
    
  });
});

describe('Teste de Fluxo de Login', () => {

    it('[CT-WEB-LOGIN-001] - Deve permitir login com usuário e senha válidos', () => {
        loginPage.realizarLoginCompleto(usuario, senha);
        loginPage.verificarSucessoValidacao();
        
    });

    it('[CT-WEB-LOGIN-002] - Deve bloquear login com senha incorreta', () => {
        
        loginPage.realizarLoginCompleto(usuario, 'senhaIncorreta!');
        loginPage.verificarErroValidacao();
        
    });

    
    it('[CT-WEB-LOGIN-003] - Deve exibir erro para usuário inexistente', () => {
        
        loginPage.realizarLoginCompleto('usuarioIncorreto', senha);
        loginPage.verificarErroValidacao();
        
    });
    
    it('[CT-WEB-LOGIN-004] - Deve validar campos vazios', () => {
        
        loginPage.realizarLoginVazio();
        loginPage.verificarErroValidacao();
        
    });

    it('[CT-WEB-LOGIN-005] - Deve impedir SQL Injection', () => {

        const sqlInjection = "' OR 1=1 --";

        loginPage.realizarLoginCompleto(sqlInjection, sqlInjection);

        loginPage.verificarErroValidacao();

    });
    
    it('[CT-WEB-LOGIN-006] - Deve impedir XSS no campo usuário', () => {
        
        loginPage.realizarLoginCompleto("<script>alert('XSS')</script>", senha);
        loginPage.verificarErroValidacao();
        
    });
    

    it('[CT-WEB-LOGIN-007] - Deve impedir acesso ao dashboard sem login', () => {
        
        cy.visit('/dashboard');
        cy.url().should('include', '/');
        
    });

    //CT-WEB-LOGIN-008 manual devido criticidade média

    it('[CT-WEB-LOGIN-009] - Deve manter usuário autenticado quando "Lembrar-me" estiver ativado', () => {
        
        loginPage.realizarLoginCompletoLembrarMe(usuario, senha);

        cy.url().should('include', '/dashboard');
        cy.reload();
        cy.url().should('include', '/dashboard');
            
    });

});