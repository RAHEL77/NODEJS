const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
app.use(bodyParser.json());

let users; //holds an array of users objects
const loadUsers = () => {
  fs.readFile("./src/users.json", (err, data) => {
    // fs.readFileSync('./src/users.json',(err,data)=>{

    if (err) {
      console.log(err);
      return;
    } else {
      //all array from json file
      // console.log(data);
      // console.log(data.length);
      users = JSON.parse(data);
    }
  });
};

const saveUsers = (users) => {
  const jsonUsers = JSON.stringify(users);
  fs.writeFile("./src/users.json", jsonUsers, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

loadUsers();

const findUser = (id) => {
  const user = users.find((u) => u.id === +id);
  return user;
};

// ***Show all users
app.get("/users", (req, res) => {
  console.log("in get of /users");
  res.json({ users });
});

// ***Show details of user
app.get("/users/:id", (req, res) => {

  const { id } = req.params;
  
  // const id=req.params.id;
  const user = findUser(id);
  // 2. When fetching users, make sure they exist.
  if (user) {
    res.json({ user });
  } else {
    res.status(404);
    res.send();
  }
});

// Add users
app.post("/users", (req, res) => {
  console.log("***** receive user *****", req.body);
  const { id } = req.body;
  /// 1. Cannot add duplicate users
  const user = findUser(id);
  if (user) {
    res.status(400).json({ msg: "user already esist" });
    return;
  }
  const user2 = { id: +id, cash: 0, credit: 0 };
  users.push(user2);
  saveUsers(users);
  res.status(201).json(user2);
  res.send();
  return;
});

// ***Update credit
app.put("/users/:id/credit", (req, res) => {
  const { id } = req.params;
  const { credit } = req.credit;
  const user = findUser(id);
  if (!user) {
    res.status(404).json({ msg: "user not found" });
    return;
  }
  if (credit < 0) {
    res.status(400).json({ msg: "credit must be positif" });
    return;}

    user.credit = credit;
    updateUser(user);
    res.json(user);
    res.send();
    return;
});

// ***Depositing
app.put("/users/:id/deposit", (req, res) => {
  console.log("***** update user deposit user *****", req.body);
  const { id } = req.params;
  const { cash } = req.body;
  /// 1. Cannot add duplicate users
  const user = findUser(id);
  if (!user) {
    res.status(404).json({ msg: "user not found" });
    return;
  }
  user.cash += cash;

  updateUser(user);
  res.status(200).json(user);
  res.send();
  return;
});

const updateUser = (user) => {
  //מייצר מערך חדש ללא לקוח קיים
  const tempUsers = users.filter((u) => u.id != user.id);
  //מוסיף למערך שנעשה פילטר את הלקוח מעודכן
  tempUsers.push(user);
  users = tempUsers;
  saveUsers(users);
};

// ***Withdraw money
app.put("/users/:id/withdraw", (req, res) => {
  console.log("***** update user withdraw user *****", req.body);
  const { id } = req.params;
  const { cash } = req.body;
  /// 1. Cannot add duplicate users
  const user = findUser(id);
  if (!user) {
    res.status(404).json({ msg: "user not found" });
    return;
  }
  if(cash<user.credit+user.cash){
    res.status(400).json({ msg: "cash must be greater than cash+credit" });
    return;
  }

  user.cash -= cash;
  updateUser(user);
  res.status(200).json(user);
  res.send();
  return;
});

// ***Transferring
//

app.listen(8001);

// Instructions:
// We are going to build a bank API.
// You are a manager of a big bank.
// The manager has access to the users of the bank and can do
// the following:

// ***Add users
// -Can add users to the bank. Each user has the following:
//      passport id, cash(default 0), credit(default 0).

// ***Depositing-הפקדה
// -Can deposit cash to a user. (by the users passport id and
//       amount of cash)

// ***Update credit
// -Can update a users credit (only positive numbers)

// ***Withdraw money
// -Can withdraw money from the user with cash (can withdraw
//      money until the cash and credit run out. Your cash can be in
//      minus up to the credit limit)

// ***Transferring
// -Can transfer money from one user to another with cash(can
//  transfer money until the cash and credit run out. Your cash can
//  be in minus up to the credit limit)

// ***Show details of user
// -Can fetch all details of a particular user
// -Show details of all users
// -Can fetch all details of all the users

// -Use cases:
// 1. Cannot add duplicate users
// 2. When fetching users, make sure they exist.
// 3. Any other use cases?(hint: there are!)
// If the use cases are not sufficient send an appropriate error
//    message to the client.

// • Save all data to a json file.
// • Create express end points that handle the logic
// • Test your work with postman

// Hero:
// Filter the users
// 1. Can fetch users by amount of cash they have.
// 2. Think of something else to filter.
// Ninja:
// Add a new field for a user: IsActive
// IsActive determines if the account is active or not.
// 1. If the user is not active, you cannot do anything with that
// user.
// 2. Fetch the users that are active and have a specified amount
// of cash.

// Node JS – Bank API
// The following exercise contains the following subjects:
//  express
//  fs
//  postman

// Submitting instructions:

// • Free text – a description of the assignment. Stuff
// that you found hard to implement, known bugs
// and your review of this assignment
