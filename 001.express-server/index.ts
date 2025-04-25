import express, { Express, Request, Response } from "express";

const port = 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/favicon.ico", (req, res) => {
    res.send("favicon");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})