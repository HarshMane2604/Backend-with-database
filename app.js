const express = require('express');
const app = express();
const port = 3000;
//const userModel = require("./usermodel.js");
const path = require('path');
const userModel = require('./models/user.js');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/read',async  (req, res) => {
    let alluser = await userModel.find()
    res.render("read",{user: alluser});
});

app.post('/create', async (req, res) => {
    let {name, email, imageurl} = req.body;
    let createdUser = await userModel.create({
        name: name,
        email: email,
        imageurl: imageurl
    })    
    res.redirect('/read');
});

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit", {user: user});
});

app.post('/update/:userid', async (req, res) => {
    let {name, email, imageurl} = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {name: name, email: email, imageurl: imageurl}, {new: true});
        res.redirect("/read");
});

app.get('/delete/:id',async  (req, res) => {
    let alluser = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
});


app.listen(port, () => {
   
    console.log(`Server is running on http://localhost:${port}`);
});


