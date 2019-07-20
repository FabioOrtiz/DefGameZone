// I know says index but is for games, real sorry for that

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', indexController_1.indexController.getIDs);
        this.router.get('/:id', indexController_1.indexController.getGameIDs);
        this.router.get('/:id', indexController_1.indexController.getNameGame);
        this.router.post('/', indexController_1.indexController.addGame);
        this.router.delete('/:id', indexController_1.indexController.deleteGame);
        this.router.put('/:id/:idg', indexController_1.indexController.maxScore);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;