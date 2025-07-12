const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8000;
const fs = require("fs");
// Middleware-Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
   console.log("Hello form m1")
   req.myUsername="Aditya Soran"
   fs.appendFile("Log.txt",`${new Date()}: ${req.method}: ${req.path}\n`,(err,date)=>{
    next();
   })
   
})
app.use((req,res,next)=>{
   console.log("Hello form m2"+req.myUsername)

    next();
})
// Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});
// REST API
app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Aditya Soran");
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  // TODO: Create new User
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "Success", id: users.length });
  });
});

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.patch("/api/users/:id", (req, res) => {
//   // TODO: Update the user by id
//   return res.json({ status: "Pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // TODO: Delete the user by id
//   return res.json({ status: "Pending" });
// });

app
  .route("/api/users/:id")
  .get((req, res) => {
    // TODO: Get the user by ID
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user.first_name + " " + user.last_name);
  })
  .patch((req, res) => {
    // TODO: Update the user by id
    const id = Number(req.params.id);
    const body = req.body;
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ status: `No user Found with id: ${id}` });
    }
    const index = users.indexOf(user);
    users[index] = { ...user, ...body };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Success", id: id });
    });
  })
  .delete((req, res) => {
    // TODO: Delete the user by id
    const id = Number(req.params.id);
    const body=req.body;
    const user=users.find((user)=>user.id===id);
    
    if(!user){
      return res.json({ status: `User not found with id: ${id}`});

    }
    const index=users.indexOf(user);
    users.splice(index,1)
    fs.writeFile("MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({ status: "Success",id:id});

    })
  });
app.listen(port, () => console.log("Server Started"));
