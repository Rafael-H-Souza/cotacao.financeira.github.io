"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCotacao = void 0;
const cotacao_service_1 = require("../services/cotacao.service");
/**
 * Controller responsável por retornar as cotações e índices.
 */
const getCotacao = async (req, res) => {
    try {
        const data = await (0, cotacao_service_1.getCotacoes)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cotações.' });
    }
};
exports.getCotacao = getCotacao;
