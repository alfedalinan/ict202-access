const { generate, read } = require('../../services/access.service')

async function generateToken(parent, args, context, info) {
    const response = await generate(args.input)
    return response
}

async function readToken(parent, args, context, info) {
    const response = await read(args.token)
    return response
}

module.exports = {
    Query: {
        readToken
    },
    Mutation: {
        generateToken
    }
}