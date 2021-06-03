let express = require("express");

let app = express();

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use((req,res) => {
    res.sendFile(__dirname + req.url);
})

app.listen(8080, ()=>console.log("listening"));
