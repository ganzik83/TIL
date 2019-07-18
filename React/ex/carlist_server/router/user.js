module.exports = (express, passport) => {
  const router = express.Router();

  router.get("/login", (req, res, next) => {
    res.render("login.ejs", {
      title: "Login Page",
      message: req.flash("loginMessage")
    });
  });

  router.post(
    "/login",
    passport.authenticate("local-login", {
      // 성공하면 메인페이지, 실패하면 로그인 페이지
      successRedirect: "/",
      failureRedirect: "/users/login",
      failureFlash: true
    })
  );

  router.get("/signup", (req, res) => {
    res.render("signup.ejs", {
      title: "Signup Page",
      message: req.flash("signupMessage")
    });
  });

  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      // 성공하면 로그인 페이지, 실패하면 제자리
      successRedirect: "/users/login",
      failureRedirect: "back",
      failureFlash: true
    })
  );

  //   사용자가 로그인 했는지 확인
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/users/login");
  }

  router.get("/logout", function(req, res) {
    console.log(
      req.session.passport.user.email,
      " 사용자가 로그아웃 하였습니다"
    );
    req.logout();
    res.redirect("/");
  });

  return router;
};
