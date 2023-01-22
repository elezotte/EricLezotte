import linksFixture from './fixtures/links'
import siteTextFixture from './fixtures/siteText'
import skillsFixture from './fixtures/skills'

enum requestActions {
  links = 'links',
  siteText = 'siteText',
  skills = 'skills',
}

const fixtures = {
  [requestActions.links]: linksFixture,
  [requestActions.siteText]: siteTextFixture,
  [requestActions.skills]: skillsFixture,
}

export default function stubber() {
  cy.intercept('/api/*', (req) => {
    const action = req.url.split('/').pop() as requestActions

    req.reply(fixtures[action])
  })
}
