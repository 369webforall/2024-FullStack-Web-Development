import express from "express";

const app = express();

app.get("/products", (req, res, next) => {
  res.send({
    id: 1,
    name: "Dev",
  });
});

app.get("/users", (req, res) => {
  res.send("List of users");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Details of user ${userId}`);
});

app.post("/users", (req, res) => {
  res.send("Create a new user");
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Update user ${userId}`);
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

app.listen(3000, () => {
  console.log("server is running in one port called 3000");
});

// http://localhost:3000/users - get - getting all users
// http://localhost:3000/users/1 - get - single user
// http://localhost:3000/users  - post - creating user
// http://localhost:3000/users/1 - put - updating single user
// http://localhost:3000/users/1 - delete - deleting single user
