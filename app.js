const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/roamnest";

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => { 
    console.log(err);
});

async function main() {
    await mongoose.connect (MONGO_URL);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get("/", (req, res) => {
    res.send("Request received");
});

