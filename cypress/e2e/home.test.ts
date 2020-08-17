describe('HomePage spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  it('should find results related with the search', () => {
    cy.visit('/');

    cy.get(`[placeholder="Procure por heróis"]`).click().type('Hulk{enter}');
    cy.location().should(loc => {
      expect(loc.search).to.eq('?query=Hulk');
    });
    cy.get('span').contains('Hulk (HAS)').should('be.visible');
    cy.get('span').contains('Hulk (Marvel Zombies)').should('be.visible');
  });
});
