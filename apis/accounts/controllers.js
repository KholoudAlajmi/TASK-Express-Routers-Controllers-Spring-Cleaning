const cakes = require("../cakes");

exports.cakeList = (req, res) => {
  res.json(cakes);
};

exports.cakeDetail = (req, res) => {
  const { cakeId } = req.params;
  const cake = cakes.find((_cake) => _cake.id === +cakeId);
  res.json(cake);
};