import { Request, Response } from 'express';
import { getCotacoes } from '../services/cotacao.service';

/**
 * Controller responsável por retornar as cotações e índices.
 */
export const getCotacao = async (req: Request, res: Response) => {
    try {
        const data = await getCotacoes();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cotações.' });
    }
};
