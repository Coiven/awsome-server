export = {
  Query: {
    user: (_root, { name }, _ctx) => {
      return _ctx.service.user.findById(name);
    },
  },
  Mutation: {
    setUser: (_root, _args, _ctx) => {
      return 'yes';
    },
  },
};
