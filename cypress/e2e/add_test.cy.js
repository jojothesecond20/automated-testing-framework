describe('Addition UI Test', () => {
  it('adds two numbers correctly using the UI', () => {
    cy.visit('http://localhost:5500/index.html');

    cy.get('#a').type('5');
    cy.get('#b').type('8');
    cy.contains('Add').click();

    // Use retry-friendly approach (Cypress auto-retries .should)
    cy.get('#result', { timeout: 6000 }).should('contain.text', 'Result: 13');
  });
});
