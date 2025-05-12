describe('Addition UI Test', () => {
  it('adds two numbers correctly using the UI', () => {
    cy.visit('http://localhost:5500');
    cy.get('#num1', { timeout: 10000 }).type('5');
    cy.get('#num2', { timeout: 10000 }).type('7');
    cy.get('#addBtn', { timeout: 10000 }).click();
    cy.get('#result', { timeout: 10000 }).should('contain', '12');
  });
});
