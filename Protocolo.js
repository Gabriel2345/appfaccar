const Protocolo = require('../Model/Protocolo');
const { index, show, store, destroy } = require('./Materia');

module.exports = {
    async index(req, res) {
        let protocolo = await Protocolo.find();
        return res.json(protocolo);
    },

    async store(req, res) {
        
        let protocolos = await Protocolo.create({
            protocolo : req.body.protocolo
        });
        return res.status(200).json({success: "Protocolo cadastrado com sucesso!", data: protocolos});

    },

   
}