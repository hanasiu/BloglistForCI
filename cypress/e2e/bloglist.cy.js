describe('login test', () => {
    it('passes', () => {
        cy.visit('http://localhost:3003')
        cy.contains('login').click()
        cy.get('#username').type('testid')
        cy.get('#password').type('testid')
        cy.get('#login-button').click()
        cy.contains('testid logged in')
    })
})


describe('app health check', function() {
  it('app health check. if fail, no deploy', function() {
    cy.visit('http://localhost:3003/health')
    cy.contains('ok')
  })
})

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3003')
//     cy.contains('blogs').click()
//     cy.contains('create new').click()
//     const date = new Date();
//     cy.get('#title-input').type(date.toString())
//     cy.get('#author-input').type('jane austen')
//     cy.get('#url-input').type('janeausten.com')
//     cy.get('#create-button').click()
//   })
// })
