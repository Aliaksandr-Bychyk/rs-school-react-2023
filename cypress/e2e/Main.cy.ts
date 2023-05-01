/// <reference types="cypress" />
describe('Main e2e', () => {
  it('Cards should be 20', () => {
    cy.visit('/');
    cy.get('.card-container').should('have.length', 20);
  });
  it('Card should open popup, popup should close', () => {
    cy.visit('/');
    cy.get('.card-container').first().click();
    cy.get('.card-popup-content').should('exist');

    cy.get('.card-image').should('exist');
    cy.get('.card-popup-title').should('exist');
    cy.get('.card-popup-summary').should('exist');

    cy.get('.overlay').click('bottom');
    cy.get('.card-popup-content').should('not.exist');

    cy.get('.card-container').eq(2).click();
    cy.get('.card-popup-content').should('exist');
    cy.get('.card-popup-close').click('bottom');
    cy.get('.card-popup-content').should('not.exist');
  });
  it('Should route', () => {
    cy.visit('/');
    cy.contains('404').click();
    cy.get('.not-found-container').should('exist');

    cy.contains('ABOUT US').click();
    cy.get('.about-us-container').should('exist');

    cy.visit('/idk');
    cy.get('.not-found-container').should('exist');

    cy.contains('FORM').click();
    cy.get('.form-container').should('exist');

    cy.contains('MAIN').click();
    cy.get('.post-container').should('exist');
  });
  it('Should ', () => {
    cy.visit('/form');
    cy.get('.form-card-container').should('not.exist');
    cy.get('input[type="text"]').type('Playa');
    cy.get('input[type="date"]').type('2006-08-29');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/boss.png');
    cy.get('.control-button-submit').click();
    cy.get('.form-card-container').should('exist');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });
});
