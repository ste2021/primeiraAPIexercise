const express = require('express');

const app = express();

app.get("/users", (req, res) => {
    console.log ("deu certo man");
    res.json({ msg: "olaaaa" });
});

app.post ("/users", (req, res) => {
    console.log("POSTOU");
    res.json({ msg: "ISSO AI PARÇA" });
});  



app.listen(3000, () => console.log("Api ta funcionando"));