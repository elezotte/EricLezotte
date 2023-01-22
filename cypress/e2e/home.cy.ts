import requestStubber from 'cypress/requestStubber'
import linksFixture from '../fixtures/links'
import siteTextFixture from '../fixtures/siteText'
import skillsFixture from '../fixtures/skills'

import { Link, SiteTexts, Skill } from 'lib/interfaces'
import { getSiteText } from 'src/utils'

describe('Home', () => {
  it('Info', () => {
    requestStubber()
    cy.visit('/')

    cy.findByTestId('home-img')
      .should('have.attr', 'src')
      .should('include', 'headshot.full.jpg')

    cy.findByTestId('home-img-switch').click()
    cy.findByTestId('home-img')
      .should('have.attr', 'src')
      .should('include', 'headshot.full.arrr.jpg')

    cy.findByTestId('home-profession').should(
      'have.text',
      getSiteText(siteTextFixture, SiteTexts.PROFESSION)
    )
    cy.findByTestId('home-statement').should(
      'have.text',
      getSiteText(siteTextFixture, SiteTexts.STATEMENT)
    )

    cy.findByTestId('home-resume-download').within(() => {
      cy.findByText('Download Resume')
    })

    cy.get('[data-testid^=home-link-]')
      .should('have.length', 3)
      .eq(0)
      .should('have.attr', 'data-testid')
      .should('equal', 'home-link-li')
    cy.get('[data-testid^=home-link-]')
      .eq(1)
      .should('have.attr', 'data-testid')
      .should('equal', 'home-link-gh')

    linksFixture.forEach((link: Link) => {
      cy.findByTestId(`home-link-${link.iconKey}`).within(() => {
        cy.get('a').should('have.attr', 'href').should('equal', link.url)
      })
    })
  })

  it('Skills', () => {
    requestStubber()
    cy.visit('/')

    cy.findByTestId('home-skills-title').should('have.text', 'Skills')

    cy.get('[data-testid^=home-skill-chip-]')
      .should('have.length', 3)
      .eq(0)
      .should('have.attr', 'data-testid')
      .should('equal', 'home-skill-chip-2')
    cy.get('[data-testid^=home-skill-chip-]')
      .eq(1)
      .should('have.attr', 'data-testid')
      .should('equal', 'home-skill-chip-3')

    skillsFixture.forEach((skill: Skill) => {
      cy.findByTestId(`home-skill-chip-${skill._id}`).should(
        'have.text',
        skill.label
      )
    })
  })

  it('Seeking', () => {
    requestStubber()
    cy.visit('/')

    cy.findByTestId('home-seeking-title').should('have.text', 'Seeking')
    cy.findByTestId('home-seeking-text').should(
      'have.text',
      getSiteText(siteTextFixture, SiteTexts.SEEKING)
    )
  })

  it('Location', () => {
    requestStubber()
    cy.visit('/')

    cy.findByTestId('home-location-title').should('have.text', 'Location')
    cy.findByTestId('home-location-text').should(
      'have.text',
      getSiteText(siteTextFixture, SiteTexts.LOCATION)
    )
  })
})
