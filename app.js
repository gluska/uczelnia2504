// //const functions = require('./functions')
// const http = require('http');
// const handler = (request, response) => {
//     console.log("25.04")
//     response.end("Hello World")
// }
// const server = http.createServer(handler);
// const port = 3000;

// // functions.helloWorld()
// // functions.sum(1,4)

// server.listen(port,(err)=>{
//     console.log("serwer działa na porcie",port)
//     if (err) {return console.log("Błąd serwera", err)}
// })
const functions = require('./functions')
const express = require("express"); //nie korzystam już z http!!
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;

//gdy uzytkownik wchodzi na stronę główną
app.set('view engine','hbs');

// app.get('/', function (req, res) {
// res.render("index",{
//     pageTitle: "Lekcja01"
// });
// })

const fromAnotherFile = require("./functions")
app.get('/', function (req, res) {
    const sample = () => {
        return 'Nauka'
        }

res.render('index', {
pageTitle: "Lekcja Node.js 25.04",
subTitle: fromAnotherFile.someTitle,
anotherTitle: sample()
})
})


//podstrona
app.get('/portfolio', function (req, res) {
    res.render("portfolio");
    })

app.listen(port, (err)=>{
    if(err){
        return console.log("coś poszło nie tak ..:",err)
    }
    console.log("serwer działa na porcie", port)
})

// Podpięcie css
const path = require('path');
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));



