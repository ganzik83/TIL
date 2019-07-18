module.exports = express => {
  const router = express.Router();

  router.get("/carlist", (req, res, next) => {
    console.log("test");
    res.send([
      {
        carNumber: "11주1111",
        owner: "홍길동",
        model: "SONATA",
        company: "HYUNDAI",
        numOfAccident: 2,
        numOfOwnerChange: 1
      },
      {
        carNumber: "22주2222",
        owner: "손오공",
        model: "MORNING",
        company: "KIA",
        numOfAccident: 1,
        numOfOwnerChange: 3
      },
      {
        carNumber: "33주3333",
        owner: "홍길동",
        model: "SONATA",
        company: "HYUNDAI",
        numOfAccident: 2,
        numOfOwnerChange: 1
      },
      {
        carNumber: "44주4444",
        owner: "손오공",
        model: "MORNING",
        company: "KIA",
        numOfAccident: 1,
        numOfOwnerChange: 3
      },
      {
        carNumber: "55주5555",
        owner: "홍길동",
        model: "SONATA",
        company: "HYUNDAI",
        numOfAccident: 2,
        numOfOwnerChange: 1
      },
      {
        carNumber: "66주6666",
        owner: "손오공",
        model: "MORNING",
        company: "KIA",
        numOfAccident: 1,
        numOfOwnerChange: 3
      },
      {
        carNumber: "77주7777",
        owner: "홍길동",
        model: "SONATA",
        company: "HYUNDAI",
        numOfAccident: 2,
        numOfOwnerChange: 1
      },
      {
        carNumber: "88주8888",
        owner: "손오공",
        model: "MORNING",
        company: "KIA",
        numOfAccident: 1,
        numOfOwnerChange: 3
      },
      {
        carNumber: "99주9999",
        owner: "홍길동",
        model: "SONATA",
        company: "HYUNDAI",
        numOfAccident: 2,
        numOfOwnerChange: 1
      },
      {
        carNumber: "1111",
        owner: "FDSA",
        model: "FDSA",
        company: "FDSA",
        numOfAccident: "1",
        numOfOwnerChange: "1"
      }
    ]);
  });
  return router;
};
