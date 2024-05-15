// src/app.js
const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const server = require("http").createServer(app);
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDatabase = require("./db/Database");
const PORT = process.env.PORT || 3000;

 
const cors = require("cors");
// Load env vars
dotenv.config({ path: "config/.env" });
app.use(
  cors({
    origin: "*", 
  })
);

//app.use(bodyParser.json());
app.use(express.json());
//router imports
app.use(cookieParser());

const user = require("./routes/userRoutes.js");



///api versioning 
 app.use("/api/v1/user", user);


//handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

//connnecting database
connectDatabase();

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


