const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.post("/api", (req, res) => {
    const name = req.body.name;
    res.json({
        message: `Hello, ${name}`,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
