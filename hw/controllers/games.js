const sendAllGames = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.gamesArray));
};

const sendCreateGame = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));
}; 

const sendGameDeleted = (req, res) => {
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify(req.game));
};

module.exports = {
  sendAllGames,
  sendCreateGame,
  sendGameUpdated,
  sendGameDeleted,
};
