class LoginPage {
    visitLoginPage() {
      cy.visit('https://demoblaze.com/'); // Adjust the URL as per your application
      return this;
    }
  
    login(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
      return this;
    }
  
    verifyLoginSuccess() {
      cy.url().should('eq', '/dashboard'); // Adjust the expected URL
      // Add more assertions for successful login if needed
    }
  
    verifyLoginError() {
      cy.url().should('eq', '/login'); // Ensure user is still on the login page
      cy.get('.error-message').should('be.visible');
      // Add more assertions for login error if needed
    }
  }
  
  export default new LoginPage();
  