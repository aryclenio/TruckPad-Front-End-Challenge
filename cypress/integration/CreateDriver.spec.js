describe('App creates a driver', () => {

  it('Checks if form blocks submit if data not valid', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Cadastrar Motorista').click();
    cy.contains('Cadastrar Motorista').click()
    cy.contains('Insira')
  })

  it('Checks if adds a driver', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Cadastrar Motorista').click();
    cy.get('[data-testid="name"] input').type("Test Driver 007")
    cy.get('[data-testid="phone"] input').type("84999828379")
    cy.get('[data-testid="birth"] input').type("21101997")
    cy.get('[data-testid="cnh"] input').type("003338298452")
    cy.get('[data-testid="cnhType"] input').click({ multiple: true })
    cy.get('[data-testid="cpf"] input').type("10604425887")
    cy.contains('Cadastrar Motorista').click()
    cy.contains('OK').click()
    cy.wait(3000)
    cy.contains('Test Driver 007').click()
  })
})