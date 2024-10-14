
describe('Login Modal test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/') // Visit the base URL where application is running
    cy.wait(2000);
  })
  it('should open the login modal when clicking Join us button', () => {
    cy.get('.absolute > .relative > .bg-black').should('be.visible').should('not.be.disabled').click();
    cy.get('.text-blue-600 > :nth-child(2)').click();
  })

  it('should login successfull and remain at the same page', function() {
    cy.get('.absolute > .relative > .bg-black').click();
    cy.get('.w-100').type('jane@gmail.com'); // an email found in dummy data
    cy.get('.container > .bg-black').click();
    // it doesn't change the ui if the login is successful
  });


  it("should lead to signup when the user email is unregistered or empty",function(){
    cy.get('.absolute > .relative > .bg-black').click();
    cy.get('.w-100').type('unknown@gmail.com');
    cy.get('.container > .bg-black').click();
    cy.get('.p-3').click();
    cy.contains('Enter Your Details').should('exist');
  });

  it("should lead to signup when the email is empty",function(){
    cy.get('.absolute > .relative > .bg-black').click();
    cy.get('.container > .bg-black').click();
    cy.get('.p-3').click();
    cy.contains('Enter Your Details').should('exist');
  })  

})