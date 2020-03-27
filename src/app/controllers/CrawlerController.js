const spySite = require('../utils/spySite');

module.exports = {
    async verifySite(req, res) {
        const { url } = req.query;

        const data = await spySite(url);

        return res.json(data);
    }
};
