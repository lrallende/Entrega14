import express from "express"
import path from 'path'
import handlebars from 'express-handlebars'

const app = express()
const http = require("http").Server(app);
let io = require("socket.io")(http);

app.set("port", process.env.PORT || 8080);
app.use(express.static('public'))

app.engine(
    "hbs", 
    handlebars({
        extname: ".hbs",
        defaultLayout: "ingresar.hbs", 
        layoutsDir: path.join(__dirname,  '..', 'views', 'layouts'),
        partialsDir: path.join(__dirname, '..', 'views', 'partials')
    })
)

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'hbs')

http.listen(8080, () => {
    console.log('Escuchando en 8080')
}).on('error', console.log);