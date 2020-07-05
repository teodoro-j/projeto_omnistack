const connection = require('../database/connection');

module.exports = {
    async indexedDB(request, response) {
        const ong_ = request.headers.authorizations;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}