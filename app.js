const express = require("express");

const app = express();

app.use(express.json())


// const cakeRoutes = require("./api/cakes/routes");

// app.use("/api/cakes", cakeRoutes);





app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });