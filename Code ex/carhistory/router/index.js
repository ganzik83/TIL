module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index.ejs", {
            title: "carhistory",
            length: 5
        });
    });
}