module.exports = (express) => {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.render("index.ejs", {
            title: "carhistory",
            length: 5
        });
    });
    return router;
};