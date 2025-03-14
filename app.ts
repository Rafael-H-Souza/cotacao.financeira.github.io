import express from 'express';
import cotacaoRoutes from './src/routes/cotacao.routes';
import { errorHandler } from './src/utils/errorHandler';
import path from 'path';

const app = express();

app.use(express.json());
app.use('/cotacoes', cotacaoRoutes);
app.use(errorHandler);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

export default app;
