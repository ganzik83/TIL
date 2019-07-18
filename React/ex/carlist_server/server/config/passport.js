// Load to passport module
const LocalStrategy = require("passport-local").Strategy;

// Import user model
const userData = require("../../models/user");

module.exports = passport => {
  // setup initialize passport
  // 세션을 위해 user 직렬화
  passport.serializeUser((user, done) => {
    // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user._id가 req.session.passport.user에 저장
  });

  // user 역직렬화
  passport.deserializeUser((id, done) => {
    // // 매개변수 id는 req.session.passport.user에 저장된 값
    userData.find(id, (err, user) => {
      done(null, user); // 여기의 user가 req.user가 됨
    });
  });

  // local strategy 사용
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // 사용자명과 패스워드의 기본값을 email과 password로 변경
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        if (email) {
          // 소문자로 변환
          email = email.toLowerCase();
        }
        //비동기로 처리
        process.nextTick(function() {
          userData.findOne(
            {
              email: email
            },
            function(err, user) {
              //   console.log(user);
              // 에러 발생시
              if (err) {
                return done(err);
              }
              // 에러 체크한 후 메시지 가져오기
              if (!user) {
                console.log(email, " 사용자가 존재하지 않습니다");
                return done(
                  null,
                  false,
                  req.flash("loginMessage", "No user found")
                );
              }
              if (!user.validPassword(password)) {
                console.log(user.email, "사용자의 패스워드가 맞지 않습니다");
                return done(
                  null,
                  false,
                  req.flash("loginMessage", "Wrong password")
                );
              }
              // 모든것이 문제가 없다면 user 가져오기
              else {
                console.log(user.email, "사용자가 로그인 하였습니다");
                return done(null, user);
              }
            }
          );
        });
      }
    )
  );

  // local strategy 등록
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        // 사용자명과 패스워드의 기본값을 'email'과 'password'로 변경
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        if (email) {
          // 소문자로 변환
          email = email.toLowerCase();
        }
        //비동기로 처리
        process.nextTick(function() {
          // user가 아직 로그인하지 않았다면
          if (!req.user) {
            userData.findOne(
              {
                email: email
              },
              function(err, user) {
                //에러 발생시
                if (err) {
                  return done(err);
                }
                // email 중복검사
                if (user) {
                  return done(
                    null,
                    false,
                    req.flash("signupMessage", "the email is already taken")
                  );
                } else {
                  // user 생성
                  let newUser = new userData();
                  // req.body로부터 사용자명 가져오기
                  newUser.name = req.body.name;
                  newUser.email = email;
                  newUser.password = newUser.generateHash(password);
                  // 데이터 저장
                  newUser.save(function(err) {
                    if (err) {
                      throw err;
                    }
                    return done(null, newUser);
                  });
                }
              }
            );
          } else {
            return done(null, req.user);
          }
        });
      }
    )
  );
};
