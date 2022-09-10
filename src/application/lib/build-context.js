const context = ({ req }) => {
    return {
        headers: req.headers,
        body: req.body
    }
}

module.exports = context