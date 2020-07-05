describe('App creates a driver', () => {

  it('Checks if form blocks submit if data not valid', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Cadastrar Motorista').click()
    cy.contains('Cadastrar').click()
    cy.contains('Insira um nome válido')
    cy.contains('Insira um telefone de 11 digitos.')
    cy.contains('Insira uma data válida.')
    cy.contains('Insira uma CNH válida com 11 digitos.')
    cy.contains('Insira um CPF válido com 11 digitos.')
  })

  it('Checks if form blocks submit if input does not have the amount of digits required', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Cadastrar Motorista').click();
    cy.get('[data-testid="name"] input').type("Test Driver 007")
    cy.get('[data-testid="phone"] input').type("849998")
    cy.get('[data-testid="birth"] input').type("21101")
    cy.get('[data-testid="cnh"] input').type("0033382")
    cy.get('[data-testid="cnhType"] input').click({ multiple: true })
    cy.get('[data-testid="cpf"] input').type("1060442")
    cy.wait(1000)
    cy.contains('Cadastrar').click()
    cy.contains('O telefone precisa ter 11 dígitos.')
    cy.contains('Insira uma data no formato dd/mm/aaaa.')
    cy.contains('A CNH deve conter 11 dígitos.')
    cy.contains('O CPF deve conter 11 dígitos.')
  })

  it('Checks if adds a driver', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Cadastrar Motorista').click()
    cy.get('[data-testid="name"] input').type("Test Driver 007")
    cy.get('[data-testid="phone"] input').type("84999828379")
    cy.get('[data-testid="birth"] input').type("21101997")
    cy.get('[data-testid="cnh"] input').type("003338298452")
    cy.get('[data-testid="cnhType"] input').click({ multiple: true })
    cy.get('[data-testid="cpf"] input').type("10604425887")
    cy.wait(1000)
    cy.contains('Cadastrar').click()
    cy.contains('OK').click()
    cy.wait(1000)
    cy.contains('Test Driver 007').click()
  })
})