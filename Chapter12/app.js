const path = require("path");
const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/host", hostRouter);

// Home page route
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
