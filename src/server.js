const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from the server!",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
