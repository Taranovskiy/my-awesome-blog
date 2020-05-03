const posts = [
  {
    title: 'Post 1',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id1',
  },
  {
    title: 'Post 2',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id2',
  },
];

export const actions = {
  async fetchAdmin(ctx) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async remove(ctx, id) {},
  async update(ctx, { id, text }) {},
  async fetchAdminById(ctx, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((item) => item._id === id));
      }, 1000);
    });
  },
};
