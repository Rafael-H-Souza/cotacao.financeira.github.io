import axios from 'axios';

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
export const getCotacoes = async () => {
    try {
        const response = await axios.get(`${API_URL}${moedas.join(',')}`);
        const rates: Record<string, number> = {};

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
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
        throw new Error('Erro ao buscar dados das cotações.');
    }
};
