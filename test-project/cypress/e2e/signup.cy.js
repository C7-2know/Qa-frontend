describe('Sign up modal test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/') // Visit the base URL where application is running
    cy.wait(2000);
    cy.get('.relative > div > .bg-black').click();
  })
  it('should open the sign up modal when clicking enter button from the login model', () => {
    cy.get('.container > .bg-black').click();
    cy.contains('Enter Your Details').should('exist');
  })

  it('should Sign up successfully when every data filled and should redirect to login page',{ timeout: 10000 }, function() {
    cy.get('.container > .bg-black').click();
    cy.get('[placeholder="Password"]').should('exist');
    cy.get('#terms').check();
    cy.get('[placeholder="Name"]').type('user1');
    cy.get('[placeholder="Surname"]').type(' user');
    cy.get('[type="email"]').type('user1@gmail.com');
    cy.get('[placeholder="Password"]').type('123456');
    cy.get('[placeholder="Confirm Password"]').type('123456');
    cy.get('.container > .flex-col > .bg-black').click();
    cy.wait(2000);
    cy.contains('Welcome to Aladia').should('exist'); //  welcome message on the login page  
    
    /* ==== End Cypress Studio ==== */
  });

  it('should fail to register when wrong formatted email entered', function() {
    cy.get('.container > .bg-black').click();
    cy.get('[placeholder="Password"]').should('exist');
    cy.get('#terms').check();
    cy.get('[placeholder="Name"]').type('user1');
    cy.get('[placeholder="Surname"]').type(' user');
    cy.get('[type="email"]').type('user1gmail.com');
    cy.get('[placeholder="Password"]').type('123456');
    cy.get('[placeholder="Confirm Password"]').type('123456');
    cy.get('.container > .flex-col > .bg-black').click();
    cy.get('[placeholder="Password"]').should('exist');

  });

})