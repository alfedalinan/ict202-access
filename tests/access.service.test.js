const { generate, read } = require('../src/application/services/access.service')

describe('Access', () => {
    let token
    it('Generate', async () => {

        var payload = {
            email: 'alfed@test.com',
            info: `{
                role: 1,
                permissions: [1,2,3,4,5,6,7,8]
            }`
        }

        const result = await generate(payload)
        token = result.token
        expect(result).toBeTruthy()
        expect(result.hasOwnProperty('token')).toBe(true)
        expect(result.hasOwnProperty('expiresIn')).toBe(true)
    })

    it('Read', async () => {
        const result = await read(token)

        expect(result).toBeTruthy()
        expect(result.hasOwnProperty('email')).toBe(true)
        expect(result.hasOwnProperty('info')).toBe(true)
    })

})