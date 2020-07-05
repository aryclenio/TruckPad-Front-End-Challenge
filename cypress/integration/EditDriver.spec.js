describe('App edit a driver', () => {

  it('Checks if form blocks submit if data not valid', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Editar').click()
    cy.get('[data-testid="name"] input').type('{selectAll}{backspace}')
    cy.wait(1000)
    cy.contains('Salvar').click()
    cy.contains("Insira um nome válido")
  })

  it('Checks if adds a driver', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Editar').click();
    cy.get('[data-testid="name"] input').type("{selectAll}{backspace} EDIT Driver 007")
    cy.contains('Salvar').click()
    cy.contains('OK').click()
    cy.wait(1000)
    cy.contains('EDIT Driver 007').click()
  })

  it('Checks if makes a driver inactive', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Editar').click()
    cy.get('[data-testid="active"] button').click()
    cy.wait(1000)
    cy.contains('Salvar').click()
    cy.contains('OK').click()
    cy.wait(1000)
    cy.contains('Inativo').click()
  })
})