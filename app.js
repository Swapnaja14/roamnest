const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
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


app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the blue sea",
        price: 1200,
        location: "Kochi, Kerala",
        country: "Kerala"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successfull testing");
});