const express = require('express');
const app = express();
const port = 3000;
//const userModel = require("./usermodel.js");
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/read', (req, res) => {
    res.render("read");
});


// app.get('/create', async (req, res) => {
//     let createUser = await userModel.create({
//         name: "Harshita",
//         email: "harshita@gmail.com",
//         username: "harshita123"
//     })
//     res.send(createUser);
// });


// app.get('/update', async (req, res) => {
//     //userModel.findOneUpdate({findOne, update, {new: true}});
//     let updatedUser = await userModel.findOneAndUpdate({username: "harsh123"}, {name: "HarshMane"}, {new: true});
//     res.send(updatedUser);
// });


// app.get("/read", async (req, res) => {
//     let users = await userModel.findOneAndDelete({username: "harsh123"}); // This will return all the users in the database.
//     res.send(users);
// })


// app.get("/delete", async (req, res) => {
//     let users = await userModel.find(); // This will return all the users in the database.
//     //find gives you array & findOne gives you object and first one in db
//     res.send(users);
// })

app.listen(port, () => {
   
    console.log(`Server is running on http://localhost:${port}`);
});