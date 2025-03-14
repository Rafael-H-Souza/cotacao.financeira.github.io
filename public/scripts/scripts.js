document.addEventListener('DOMContentLoaded', async () => {
    const carousel = document.getElementById('carousel');
    const currencyList = document.getElementById('currency-list');
    const miniIndiceDisplay = document.getElementById('mini-indice');
    const miniDolarDisplay = document.getElementById('mini-dolar');

    const moedas = [
        'USD-BRL', 'EUR-BRL', 'BTC-BRL', 'GBP-BRL', 'ARS-BRL', 'CAD-BRL',
        'AUD-BRL', 'CNY-BRL', 'JPY-BRL', 'CHF-BRL', 'MXN-BRL', 'ILS-BRL',
        'ETH-BRL', 'LTC-BRL', 'DOGE-BRL', 'ADA-BRL', 'XRP-BRL', 'DOT-BRL',
        'XLM-BRL', 'BCH-BRL'
    ];

    async function fetchExchangeRates() {
        try {
            const response = await fetch('http://localhost:3000/cotacoes/cotacao');
            if (!response.ok) {
                throw new Error('Erro ao buscar dados da API.');
            }

            const data = await response.json();
            
            renderCarousel(data.rates || {});  // Renderiza mesmo sem valores disponíveis
            renderCurrencyList(data.rates || {});

            miniIndiceDisplay.textContent = verificarHorarioComercial(data.miniIndice, data.miniIndiceUltima) || 'N/A';
            miniDolarDisplay.textContent = verificarHorarioComercial(data.miniDolar, data.miniDolarUltima) || 'N/A';

        } catch (error) {
            
            console.error('Erro ao buscar cotações:', error);
            renderCarousel({}); // Garante que pelo menos os nomes das moedas sejam exibidos
            currencyList.innerHTML = '<alert>Servidor de cotação fora do Ar.</alert>';
            currencyList.style.color = 'red';

            setTimeout(() => {
                currencyList.innerHTML = ''; 
            }, 5000);
        }
    }

    function verificarHorarioComercial(atual, ultima) {
        const agora = new Date();
        const horarioComercial = (agora.getHours() >= 9 && agora.getHours() < 18);
        return horarioComercial ? atual : ultima;
    }

    function renderCarousel(rates) {
        carousel.innerHTML = '';
        moedas.forEach(moeda => {
            const item = document.createElement('div');
            item.className = 'carousel-item';

            const valor = rates[moeda];
            if (valor) {
                item.textContent = `${moeda}: R$ ${valor.toFixed(2)}`;
                item.style.color = valor >= 0 ? 'green' : 'red';
            } else {
                item.textContent = `${moeda}: ---`;
                item.style.color = 'gray';
            }

            carousel.appendChild(item);
        });
    }

    function renderCurrencyList(rates) {
        currencyList.innerHTML = '';
        moedas.forEach(moeda => {
            const item = document.createElement('div');
            item.className = 'currency-item';
            const valor = rates[moeda];

            item.textContent = valor ? `${moeda}: R$ ${valor.toFixed(2)}` : `${moeda}: ---`;
            item.style.color = valor >= 0 ? 'green' : 'red';
            
            currencyList.appendChild(item);
        });
    }

    await fetchExchangeRates();
});

document.addEventListener('DOMContentLoaded', async () => {
    const indices = {
        'mini-indice': 'Win',
        'mini-dolar': 'WDO',
        'mini-bitcoin': 'MBTC',
        'acao-itau': 'ITUB4',
        'ibovespa': 'IBOV',
        'acao-petrobras': 'PETR4',
        'juros-brasil': 'SELIC',
        'juros-eua': 'FED'
    };

    async function fetchCotacoes() {
        try {
            const response = await fetch('http://localhost:3000/cotacoes/cotacao');
            if (!response.ok) throw new Error('Erro ao buscar dados da API.');

            const data = await response.json();

            Object.keys(indices).forEach(id => {
                const elemento = document.getElementById(id);
                elemento.textContent = data[indices[id]] 
                    ? `R$ ${data[indices[id]].toFixed(2)}` 
                    : 'N/A';
            });
        } catch (error) {
            console.error('Erro ao buscar cotações:', error);

            Object.keys(indices).forEach(id => {
                const elemento = document.getElementById(id);
                elemento.textContent = 'Erro na cotação';
                elemento.style.color = 'red';
            });

            setTimeout(() => {
                Object.keys(indices).forEach(id => {
                    const elemento = document.getElementById(id);
                    elemento.textContent = 'Carregando...';
                    elemento.style.color = 'black';
                });
            }, 5000);
        }
    }

    await fetchCotacoes();
});
