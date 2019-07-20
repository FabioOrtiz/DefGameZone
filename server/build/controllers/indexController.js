//i know say index but this will be used for game

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    getIDs(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('SELECT id  FROM user WHERE nick = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }

    getGameIDs(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('SELECT game_id  FROM game_user WHERE user_id = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }

    getNameGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('SELECT name  FROM game WHERE id = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }

    addGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            yield database_1.default.query('INSERT INTO game_user set ?', [req.body]);
            res.json({ message: 'Game is Saved' });
        });
    }

    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM game_user WHERE game_id = ?', [id], function(err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: 'Game is Deleted' });
            });
        });
    }

    maxScore(req, res) {
        return __awaiter(this, void 0, void 0, function*() {
            const { idg, mg } = req.params;
            yield database_1.default.query('INSERT INTO game_user WHERE  idg=? set max_score=?', [idg, mg]);
            res.json({ message: 'Game is Saved' });
        });
    }

}
exports.indexController = new IndexController();