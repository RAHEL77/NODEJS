const express = require('express');
const bodyParser = require('body-parser')
// const port =8000;

const app = express();
app.use(bodyParser.json());
const users = []
app.listen(process.env.PORT || 8080);

app.get('/users', (req, res) => {
    res.json({id: 1, name:'David', email: 'david@mail.com'})
})
app.post('/users', (req, res) => {
    console.log('***** received user user *****', req.body);
    const{name, email} = req.body;
    const user={id: new Date().getTime(), name:name, email:email};
    users.push(user);
    res.status(201).json(user);
    res.send();
    return
})

app.listen(8080);



// Backend: Node JS
// Node JS – users.json
// The following exercise contains the following subjects:
//  Node JS
//  Yargs or Express
//  json
//  CRUD
// Instructions
// Practice makes perfect.
// Lets create crud operations to manage users in a json file.
// Create a CRUD application and store them in a users.json file
// that you are able to do the following operations:
// 1. Create a user
// 2. Read a user
// 3. Update a user
// 4. Delete a user
// Each user needs at least the following:
// 1. Id
// 2. Name
// 3. Email
// Use this npm package to create unique ids.
// When reading, updating or deleting a user, you must only use
// their id to find them.
// Ninja
// A user is able to create a password.
// A user is able to update their password.
// Submit the file to Hive.