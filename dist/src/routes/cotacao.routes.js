"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cotacao_controller_1 = require("../controllers/cotacao.controller");
const router = (0, express_1.Router)();
router.get('/cotacao', cotacao_controller_1.getCotacao);
exports.default = router;
