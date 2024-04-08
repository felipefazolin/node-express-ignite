require("module-alias/register");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("@config/db");
const elementRoutes = require("@routes/elementRoutes"); // Alteração aqui

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

connectDB();

app.use("/", elementRoutes); // Alteração aqui

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
