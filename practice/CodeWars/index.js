const userServise = {
  currentFilter: 'active',
  users: [
    { name: 'John', status: 'active' },
    { name: 'Alex', status: 'deleted' },
  ],
  getFilteredUsers: function () {
    return this.users.filter(user => {
      return user.status === this.currentFilter;
    });
  },
};

console.log(userServise.getFilteredUsers());
