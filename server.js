const express = require('express');
const path = require('path');
var con = require("./connection");

let app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



let initial_path = path.join(__dirname, "public");
console.log(initial_path);


app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));

})
app.post('/', function (req, res) {
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.pass2;
    var username1 = req.body.username1;
    var password3 = req.body.pass3;
    //console.log(req.body);
    if (name != null && username1 == null) {
        con.connect(function (error) {

            if (username.length >= 6 && email.length >= 6 && password.length >= 6) {
                var sql = "INSERT INTO users(name,username,email,password) VALUES('" + name + "','" + username + "','" + email + "','" + password + "')";
                con.query(sql, function (error, result) {

                    res.redirect('/');
                })
            }
        })
    }
    if (username1 != null && name == null) {
        //    console.log(req.body);
        //  if(username1.length>=6 &&  password3.length>=6){
        if (username1 && password3) {
            con.query('SELECT * FROM users', function (error, results) {
                for (let i = 0; i < results.length; i++) {
                    // console.log(results[i].username);
                    // console.log(username1);
                    if (username1 == results[i].username) {
                        // console.log(username1);
                        if (password3 == results[i].password) {
                            // global.id=results[i].id;
                            // console.log(id);
                            res.redirect('/home');
                            console.log("ok");
                        }
                    }


                }

            });
        }


    }


});





app.get('/home', (req, res) => {
    res.sendFile(path.join(initial_path, "landing.html"));

})
app.get('/movie', (req, res) => {
    res.sendFile(path.join(initial_path, "movies.html"));
})
app.get('/TvShows', (req, res) => {
    res.sendFile(path.join(initial_path, "TvShows.html"));
})
app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})
app.get('/TvShows/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "aboutTvshows.html"));

})
app.get('/:id/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "seasons.html"));

})
app.get('/:id/:id/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "episode.html"));

})

app.use((req, res) => {
    res.json("404");
})
app.listen(3000, () => {
    console.log('listening on port 3000......');
})