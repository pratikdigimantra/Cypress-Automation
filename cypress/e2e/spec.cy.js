describe('Accessing Dispatch Website', () => {
  it('First Test Case', () => {
    cy.visit('https://orgplay.app/')
  
    cy.title().should('eq', 'EveryDay Heroes Dispatch')

    cy.contains('Create A Game').click()

    cy.contains('Cancel').click()

    cy.contains('Sign In').click()
    
    
    cy.origin('https://auth.evilgeniusgames.com', () => {
      
  
      cy.get('#signInFormUsername', { timeout: 10000 })
        .type('janvi@yopmail.com', { force: true });
  
      cy.get('#signInFormPassword')
        .type('Test@123', { force: true });


        cy.get('input[name="signInSubmitButton"]')
        .eq(0) // Assert that there is only one element
        .click({ force: true }); // Click the button
  });

  

  
  }
   
  


)

  


})