describe('Addition UI Test', () => {
  it('adds two numbers correctly using the UI', () => {
    cy.visit('http://localhost:5500'); // Adjust port if different

    cy.get('#num1').type('5');
    cy.get('#num2').type('7');
    cy.get('#addBtn').click();

    cy.get('#result').should('contain', '12');
  });
});
