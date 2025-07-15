// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));

// ✅ Correct router usage
app.use(userRouter);
app.use("/host",hostRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
