"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const http = require("http").Server(app);

let io = require("socket.io")(http);

app.set("port", process.env.PORT || 8080);
app.use(_express.default.static('public'));
app.engine("hbs", (0, _expressHandlebars.default)({
  extname: ".hbs",
  defaultLayout: "ingresar.hbs",
  layoutsDir: _path.default.join(__dirname, '..', 'views', 'layouts'),
  partialsDir: _path.default.join(__dirname, '..', 'views', 'partials')
}));
app.set('views', _path.default.join(__dirname, '..', 'views'));
app.set('view engine', 'hbs');
http.listen(8080, () => {
  console.log('Escuchando en 8080');
}).on('error', console.log);
