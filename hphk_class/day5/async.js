console.log('start');

setTimeout(() => {
  console.log('foo');
}, 5000);

setTimeout(() => {
  console.log('hoo');
}, 1000);

console.log('end');

// 강사님 학습 코드
// const users = [
//   { id: 1, githubId: 'tony'},
//   { id: 2, githubId: 'thor'},
//   { id: 3, githubId: 'hulk'},
// ];

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

// // ES6

// async function getInfo() {
//   const user = await getUser(1);
//   const repo = await getRepo(user.githubId);
//   const commit = await getCommit(repo.commitId);
//   console.log(commit);
// };
