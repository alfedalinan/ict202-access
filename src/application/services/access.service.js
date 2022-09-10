const { sign, verify } = require('jsonwebtoken')
const config = require('../../shared/config')

async function generate(payload) {
    const token = await sign(payload, config.ACCESS_SECRET, { expiresIn: config.ACCESS_EXPIRY })
    return { token, expiresIn: (config.ACCESS_EXPIRY / 1000) }
}

async function read(token) {
    try {
        const access = await verify(token, config.ACCESS_SECRET)
        return access
    } catch (error) {
        return null
    }
}

module.exports = { generate, read }