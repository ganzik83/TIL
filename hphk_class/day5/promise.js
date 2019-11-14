const promise = new Promise((resolve, reject) => {
  resolve('성공');
  reject('실패');
});

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// // 랜덤으로 실패
// const getAccount = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.floor(Math.random() * 100);
//     console.log(number);
//     if (!(number % 2)) {
//       resolve('성공');
//     } else {
//       reject('실패');
//     }
//   }, 2000);
// });

// getAccount
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });

const users = [
  { id: 1, name: 'tony' },
  { id: 2, name: 'thor' },
  { id: 3, name: 'hulk' }
];

// DB에서 user정보 탐색
function getUser(id) {
  console.log('유저를 찾고 있습니다!');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) resolve(user);
      else reject(new Error('유저가 없습니다!'));
    }, 2000);
  });
}

function getRepo(githubId) {
  const repos = [
    { githubId: 'thor', commitId: 1 },
    { githubId: 'hulk', commitId: 2 },
    { githubId: 'tony', commitId: 3 }
  ];
  console.log('레포지토리를 찾고 있습니다');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(repo => repo.githubId === githubId);
      if (repo) resolve(repo);
      else reject(new Error('레포지토리가 없습니다'));
    }, 2000);
  });
}

function getCommit(commitId) {
  const commits = [
    { commitId: 1, contents: 'first commit' },
    { commitId: 2, contents: '[ADD] commit' },
    { commitId: 3, contents: '[MOD] commit' }
  ];
  return new Promise((resolve, reject) => {
    console.log('커밋 찾는중');
    setTimeout(() => {
      const commit = commits.find(commit => commit.commitId === commitId);
      if (commit) resolve(commit);
      else reject(new Error('커밋이 없습니다'));
    }, 2000);
  });
}

// getUser(1)
//   .then(user => {
//     getRepo(user.name);
//   })
//   .then(repo => {
//     getCommit(repo.commitId);
//   })
//   .then(commit => {
//     commit;
//   })
//   .catch(error => {
//     console.error(error);
//   });

// ES6
async function getInfo() {
  const user = await getUser(1);
  const repo = await getRepo(user.githubId);
  const commit = await getCommit(repo.commitId);
  console.log(commit);
}

getInfo();

// // 강사님 강의 코드
// const promise = new Promise((resolve, reject) => {
//   resolve('성공');
//   reject('실패');
// });

// // promise
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error))

// // 랜덤으로 실패

// // const getAccount = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const number = Math.floor(Math.random() * 100);
// //     console.log(number);
// //     if (number % 2) {
// //       resolve('성공');
// //     } else {
// //       reject('실패');
// //     };
// //   }, 2000);
// // });

// // getAccount
// //   .then(result => console.log(result))
// //   .catch(error => console.error(error))

// const users = [
//   { id: 1, githubId: 'tony'},
//   { id: 2, githubId: 'thor'},
//   { id: 3, githubId: 'hulk'},
// ];

// // callback => promise
// function getUser(id) {
//   console.log('유저를 찾고 있습니다!');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = users.find(user => user.id === id);
//       if (user) resolve(user)
//       else reject(new Error('유저가 없습니다!'));
//     }, 2000);
//   });
// };

// function getRepo(githubId) {
//   const repos = [
//     { githubId: 'tony', commitId: 1 },
//     { githubId: 'tony', commitId: 2 },
//     { githubId: 'tony', commitId: 3 },
//   ];

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const repo = repos.find(repo => repo.githubId === githubId);
//       if (repo) resolve(repo)
//       else reject(new Error('Repo.가 없습니다!'))
//     }, 2000);
//   });
// };

// function getCommit(commitId) {
//   const commits = [
//     { commitId: 1, contents: 'first commit' },
//     { commitId: 2, contents: '[ADD] commit' },
//     { commitId: 3, contents: '[MOD] commit' },
//   ];

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const commit = commits.find(commit => commit.commitId === commitId);
//       if (commit) resolve(commit)
//       else reject(new Error('commit이 없습니다.'))
//     }, 2000);
//   });
// };

// getUser(1)
//   .then(user => getRepo(user.githubId))
//   .then(repo => getCommit(repo.commitId))
//   .then(commit => console.log(commit))
//   .catch(err => console.error(err));
