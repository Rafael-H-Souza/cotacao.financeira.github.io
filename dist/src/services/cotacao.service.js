"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCotacoes = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://economia.awesomeapi.com.br/json/last/';
const moedas = [
    'USD-BRL', 'EUR-BRL', 'BTC-BRL', 'GBP-BRL', 'ARS-BRL', 'CAD-BRL',
    'AUD-BRL', 'CNY-BRL', 'JPY-BRL', 'CHF-BRL', 'MXN-BRL', 'ILS-BRL',
    'ETH-BRL', 'LTC-BRL', 'DOGE-BRL', 'ADA-BRL', 'XRP-BRL', 'DOT-BRL',
    'XLM-BRL', 'BCH-BRL'
];
/**
 * Busca as cotações em tempo real e retorna os dados formatados.
 */
const getCotacoes = async () => {
    try {
        const response = await axios_1.default.get(`${API_URL}${moedas.join(',')}`);
        const rates = {};
        moedas.forEach(moeda => {
            if (response.data[moeda.replace('-', '')]) {
                rates[moeda] = parseFloat(response.data[moeda.replace('-', '')].bid);
            }
        });
        // Simulação de dados para Mini Índice e Mini Dólar
        const miniIndice = (Math.random() * 130000).toFixed(2);
        const miniDolar = (Math.random() * 5 + 4).toFixed(2);
        return {
            rates,
            miniIndice,
            miniDolar
        };
    }
    catch (error) {
        console.error('Erro ao buscar cotações:', error);
        throw new Error('Erro ao buscar dados das cotações.');
    }
};
exports.getCotacoes = getCotacoes;
