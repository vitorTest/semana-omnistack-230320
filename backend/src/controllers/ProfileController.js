const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);
    },

    async login(request, response){
        const id = request.body.id;

        const ong = await connection('ongs')
            .where('id', id)
            .select('id')
            .first();

        if (!ong){
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        return response.status(204).send();
    } 
}