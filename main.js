const userList = document.getElementById('users');

const { username} = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
