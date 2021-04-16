const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const users = [
  { id: 1, cash: 1000, credit: 200 },
  { id: 2, cash: 100, credit: 2000 },
];
const findUser=(id)=>{
    const user = users.find((u) => u.id === +id);
   return user
}

app.get("/users", (req, res) => {
  res.json({ users });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = findUser(id)
  if (user) {
    res.json({ user });
  } else {
    res.status(404);
    res.send()
  }
});

app.post("/users", (req, res) => {
  console.log("***** received user user *****", req.body);
  const { id } = req.body;
  const user = findUser(id)
  if (user){
      res.status(400).json({msg:'user already esist'})
      return
  }
  const user2 = { id, cash: 0, credit: 0 };
  users.push(user2);
  res.status(201).json(user2);
  res.send();
  return;
});

app.listen(process.env.PORT || 8080);

// Node JS – Bank API
// The following exercise contains the following subjects:
//  express
//  fs
//  postman

// Instructions:
// We are going to build a bank API.
// You are a manager of a big bank.
// The manager has access to the users of the bank and can do
// the following:
// Add users
// Can add users to the bank. Each user has the following:
// passport id, cash(default 0), credit(default 0).
// Depositing
// Can deposit cash to a user. (by the users passport id and
// amount of cash)
// Update credit
// Can update a users credit (only positive numbers)
// Withdraw money
// Can withdraw money from the user with cash (can withdraw
// money until the cash and credit run out. Your cash can be in
// minus up to the credit limit)
// Transferring
// Can transfer money from one user to another with cash(can
// transfer money until the cash and credit run out. Your cash can
// be in minus up to the credit limit)
// Show details of user
// Can fetch all details of a particular user
// Show details of all users
// Can fetch all details of all the users
// Use cases:
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
// Submitting instructions:

// • Free text – a description of the assignment. Stuff
// that you found hard to implement, known bugs
// and your review of this assignment
