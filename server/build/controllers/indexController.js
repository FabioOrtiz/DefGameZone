"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'ABC' });
    }

    getIDUser(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('SELECT id FROM user WHERE nick = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }

    getIDGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('SELECT game_id FROM game_user WHERE user_id = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }

    getGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM game WHERE id = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }


    addNewGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            yield database_1.default.query('INSERT INTO game_user set ?', [req.body]);
            res.json({ message: 'User Saved' });
        });
    }

    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { idg, nick } = req.params;
            yield database_1.default.query('DELETE FROM game_user WHERE game_id = ? and user_id=?', [idg, nick], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }


    //Creo que esto creara otro usuario en vez de setear el puntaje máximo, tal vez deberíamos activar un deleate game o algo
    setMaxScore(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            yield database_1.default.query('INSERT INTO game_user set ?', [req.body]);
            res.json({ message: 'Score Changed' });
        });
    }


    getAllGames(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            yield database_1.default.query('SELECT * FROM games', function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
exports.indexController = new IndexController();