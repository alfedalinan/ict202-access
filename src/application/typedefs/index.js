const { gql } = require('apollo-server')
const readTypeDefs = require('../lib/read-type-defs')
const accessTypeDefs = readTypeDefs(`${__dirname}/access`)


const typeDefs = gql`
    type Query
    type Mutation
    ${accessTypeDefs}
`

module.exports = typeDefs