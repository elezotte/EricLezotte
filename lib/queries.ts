import gql from 'graphql-tag'

export const linksQuery = gql`
  query Links {
    links {
      data {
        _id
        iconKey
        label
        rank
        url
      }
    }
  }
`

export const skillsQuery = gql`
  query Skills {
    skills {
      data {
        _id
        label
        rank
        yearsUsed
      }
    }
  }
`

export const siteTextQuery = gql`
  query SiteText {
    siteText {
      data {
        _id
        key
        value
      }
    }
  }
`
