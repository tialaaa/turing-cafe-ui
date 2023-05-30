describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservations.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should show a reservation dashboard upon page load, with details of the current reservations', () => {
    cy.get('h1').should('have.text', 'Turing Cafe Reservations')
    cy.get('.resy-container').first().contains('h3', 'Christie')
      .get('.resy-container').first().contains('p', '12/29')
      .get('.resy-container').first().contains('p', '7:00')
      .get('.resy-container').first().contains('p', '12')
    cy.get('.resy-container').last().contains('h3', 'Pam')
  })

  it('Should have a controlled form for adding new reservations', () => {
    cy.get('form')
      .get("input[name='name']").type("Tiala")
      .get("input[name='name']").should('have.value', "Tiala")
      .get("input[name='date']").type("06/10")
      .get("input[name='date']").should('have.value', "06/10")
      .get("input[name='time']").type("7:00")
      .get("input[name='time']").should('have.value', "7:00")
      .get("input[name='number']").type("4")
      .get("input[name='number']").should('have.value', "4")  })

  it('Should be able to add a new reservation using the form', () => {
    cy.get('form')
      .get("input[name='name']").type("Tiala")
      .get("input[name='date']").type("06/10")
      .get("input[name='time']").type("7:00")
      .get("input[name='number']").type("4")
      .get(".button-make-resy").click()
    cy.get('.resy-container').last().contains('h3', 'Tiala')
    cy.get('.resy-container').last().contains('p', '06/10')
    cy.get('.resy-container').last().contains('p', '7:00')
    cy.get('.resy-container').last().contains('p', '4')
  })

  it.skip('Should alert the user if all input fields are not filled out when submitting', () => {
    
  })

  it.skip('Should reset the form inputs after successfully submitting a reservation', () => {
    
  })

  it.skip('Should show the user a message when there is an error connecting to the server', () => {
    
  })
})