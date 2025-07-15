// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded({ extended: true }));

// ✅ Correct router usage
app.use(userRouter);

// You can remove this duplicate "/" route if it's already defined in userRouter
// Or keep it, depending on your intention (but there should be only one `/`)
/*
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Airbnb</h1> 
        <a href="/host/add-home">Add Home</a>`);
});
*/

app.get("/host/add-home", (req, res) => {
  res.send(`<h1>Register Your Home Now</h1>
      <form action="/host/add-home" method="POST">
          <input type="text" name="homeName" placeholder="Home Name" required>
          <button type="submit">Add Home</button>
      </form>`);
});

app.post("/host/add-home", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Home registered successfully</h1>
      <a href="/">Go to Home</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
