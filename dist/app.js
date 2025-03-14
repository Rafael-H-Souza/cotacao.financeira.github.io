"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cotacao_routes_1 = __importDefault(require("./src/routes/cotacao.routes"));
const errorHandler_1 = require("./src/utils/errorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/cotacoes', cotacao_routes_1.default);
app.use(errorHandler_1.errorHandler);
// Servir arquivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/index', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/views/index.html'));
});
exports.default = app;
