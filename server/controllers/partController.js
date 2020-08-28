const parts = require('../data.json')

module.exports = {
    getPart: (req, res) => {
        const { type } = req.query
        if (!type) {
            res.status(200).send(parts)
        } else {
            const part = parts.filter(element => element.partType === type)
            res.status(200).send(part)
        }

    }
}