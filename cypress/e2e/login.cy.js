import LoginPage from '../page_object_model/LoginPage';

describe('Login Functionality', () => {
  it('should log in with valid credentials', () => {
    const validUserData = cy.fixture('userData').its('validUser');
    LoginPage.visitLoginPage()
      .login(validUserData.username, validUserData.password)
      .verifyLoginSuccess();
  });

  it('should display an error with invalid credentials', () => {
    const invalidUserData = cy.fixture('userData').its('invalidUser');
    LoginPage.visitLoginPage()
      .login(invalidUserData.username, invalidUserData.password)
      .verifyLoginError();
  });
});