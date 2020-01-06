const dotenorio = require("dotenorio")();
const isUrl = require("is-url");

module.exports = (req, res) => {
  let key = req.query.key;
  let value = dotenorio[key];

  if (!value) {
    return res.status(400).send(`Sorry, '${key}' it is a invalid param.`);
  }

  if (isUrl(value)) {
    return res.send(`<meta http-equiv="refresh" content="0; URL=${value}">`);
  }

  res.send(value);
};
