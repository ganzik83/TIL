const users = [
  { id: 1, name: 'tony' },
  { id: 2, name: 'thor' },
  { id: 3, name: 'hulk' }
];

// DB에서 user정보 탐색
function getUser(id) {
  let user = null;
  setTimeout(() => {
    user = users.find(user => user.id === id);
  }, 2000);
  return user;
}

getUser(2);

// DB에서 user정보 탐색
function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}

function getRepo(githubId, callback) {
  const repos = [
    { githubId: 'tony', commitId: 1 },
    { githubId: 'tony', commitId: 2 },
    { githubId: 'tony', commitId: 3 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubId === githubId);
    callback(repo);
  }, 2000);
}

function getCommit(commitId, callback) {
  const commits = [
    { commitId: 1, contents: 'first commit' },
    { commitId: 2, contents: '[ADD] commit' },
    { commitId: 3, contents: '[MOD] commit' }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitId === commitId);
    callback(commit);
  }, 2000);
}

// const user = getUser(1)
// repo
// commit
//

getUserCallback(1, user => {
  console.log('유저를 찾고 있습니다...');
  console.log(user);
  getRepo(user.name, repo => {
    console.log('repo를 찾고 있습니다...');
    console.log(repo);
    getCommit(repo.commitId, commit => {
      console.log('commit을 찾고 있습니다...');
      console.log(commit);
    });
  });
});
