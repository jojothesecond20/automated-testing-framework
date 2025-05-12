describe('Addition UI Test', () => {
  it('adds two numbers correctly using the UI', () => {
    cy.visit('http://localhost:5500/index.html');

    cy.get('#num1').should('be.visible').clear().type('5');
    cy.get('#num2').should('be.visible').clear().type('8');
    cy.get('#addBtn').should('be.visible').click();
    cy.get('#result').should('contain.text', 'Result: 13');
  });
});
