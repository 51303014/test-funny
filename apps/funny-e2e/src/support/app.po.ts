export const clickByTestId = id => {
  return cy.get(`#${id}`).click()
}

export const clickElementbyClass = className => {
  return cy.get(`.${className}`).click()
}
