const gamesRouter = require("express").Router();

const {
    findGameById,
    findAllGames,
    createGame,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIsGameExists,
  } = require('../middlewares/games');
const {
    sendAllGames,
    sendCreateGame,
    sendGameUpdated,
    sendGameDeleted,
  } = require('../controllers/games');

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkEmptyFields,
    createGame,
    sendCreateGame,
  );

  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
  );

gamesRouter.delete( "/games/:id", deleteGame, sendGameDeleted ); 

module.exports = gamesRouter;