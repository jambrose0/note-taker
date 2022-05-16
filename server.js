const fs = require("fs");
const path = require("path");
const express = require("express");
const exp = require("constants");
const { notes } = require("./db/db.json");
const apiRoutes = require("./route/apiRoutes");
const htmlRoutes = require("./route/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});