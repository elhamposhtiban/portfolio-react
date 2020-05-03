
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 3003;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});