import { clickByTestId } from '../support/app.po';

describe('funny', () => {
  beforeEach(() => cy.visit('/#/login'));
  it('Sign in: success', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: '**/users/login',
    }).as('login')
    clickByTestId('email').type('binhrami@gmail.com')
    clickByTestId('password').type('Binh0904')
    clickByTestId('sign-in-submit')
    cy.wait('@login').its('status').should('eq', 200)
  })
    it('Sign in: failed', () => {
    cy.server()
    cy.route({
      method: 'POST',
      url: '**/users/login',
    }).as('login')
    clickByTestId('email').type('test@gmail.com')
    clickByTestId('password').type('123456')
    clickByTestId('sign-in-submit')
    cy.wait('@login').its('status').should('eq', 404)
  })

});
