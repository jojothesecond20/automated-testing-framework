describe('Addition UI Test', () => {
  it('adds two numbers correctly using the UI', () => {
    cy.visit('http://localhost:5500/index.html');
    cy.get('#a').type('5');
    cy.get('#b').type('8');
    cy.get('#addBtn').click();
    cy.get('#result').should('have.text', 'Result: 13');
  });
});
