const express = require("express");
const app = express();
import { Request, Response } from "express";
app.use(express.json());
const port = process.env.PORT || 4000;

//Testing our server!
app.get("/", (req: Request, res: Response) => {
  res.send("Swipes Server Set-up!");
});

const server = app.listen(port, () => {
  console.log(`Server listening on heroku at port: ` + port);
});
