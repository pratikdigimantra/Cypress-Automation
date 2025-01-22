describe('Accessing Dispatch Website', () => {
  it('Valid Login Details', () => {
    cy.visit('https://orgplay.app/')

    cy.title().should('eq', 'EveryDay Heroes Dispatch')

    cy.contains('Create A Game').click()

    cy.contains('Cancel').click()

    cy.contains('Sign In').click()


    cy.origin('https://auth.evilgeniusgames.com', () => {


      cy.fixture('template').then((user) => {

        cy.get('#signInFormUsername', { timeout: 10000 }).type(user.email, { force: true });

        cy.get('#signInFormPassword').type(user.password, { force: true });



        cy.get('input[name="signInSubmitButton"]').eq(0).click({ force: true });

      })
    
    });
    
    cy.wait(5000).then(() => { // Wait for 5 seconds
      cy.contains('Home').click();
    });
    
    cy.url().should('include', '/dashboard');
    cy.getCookie('user-access-token').should('exist');
    cy.getCookie('authToken').then((cookie) => {
      cy.log('Cookie Value:', cookie.value); 
      console.log('Cookie:', cookie); 
    });

  })

  it('Invalid Login Details', () => {
    
    cy.visit('https://orgplay.app/')

    cy.contains('Sign In').click()

    cy.origin('https://auth.evilgeniusgames.com', () => {


      cy.fixture('template').then((user) => {

        cy.get('#signInFormUsername', { timeout: 10000 }).type(user.email, { force: true });

        cy.get('#signInFormPassword').type(user.invalid, { force: true });



        cy.get('input[name="signInSubmitButton"]').eq(0).click({ force: true });

        
      })

      cy.get('#loginErrorMessage', { force: true }).should('have.text', 'Incorrect username or password.');
    })
  }) 
})