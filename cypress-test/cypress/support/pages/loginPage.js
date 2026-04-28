class LoginPage {

    get inputUsuario() {
        return cy.get('#loginUsername');
    }

    get inputSenha() {
        return cy.get('#loginPassword');
    }

    get botaoEntrar() {
        return cy.get('[data-testid="login-button"]');
    }

    get mensagemErro() {
        return cy.get('.message.error');
    }

    get mensagemSucesso() {
        return cy.get('.message.success');
    }

    get botaoLembrarMe() {
        return cy.get('#rememberMe');
    }

    realizarLogin(usuario, senha) {
        this.inputUsuario.clear().type(usuario);
        this.inputSenha.clear().type(senha);
    }

    realizarLoginVazio() {
        this.submeterLogin();
    }

    submeterLogin() {
        this.botaoEntrar.click();
    }

    realizarLoginCompleto(usuario, senha) {
        this.realizarLogin(usuario, senha);
        this.submeterLogin();
    }

    realizarLoginCompletoLembrarMe(usuario, senha) {
        this.realizarLogin(usuario, senha);
        this.botaoLembrarMe.check();
        this.submeterLogin();
    }

    verificarErroValidacao() {
        return this.mensagemErro.should('be.visible');
    }

    verificarSucessoValidacao() {
        return this.mensagemSucesso.should('be.visible');
    }

}

export default new LoginPage();
