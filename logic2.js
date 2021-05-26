const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
  return promise;
};

const loggerSecond = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(loggerSecond);
toggleUserState(users, "Lux").then(loggerSecond);
