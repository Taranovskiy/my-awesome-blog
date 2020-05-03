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
  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);

      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    } catch (error) {
      commit('setError', error, { root: true });
      throw error;
    }
  },
  async update(ctx, { id, text }) {},
  async remove(ctx, id) {},
  async fetchAdminById(ctx, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((item) => item._id === id));
      }, 1000);
    });
  },
};
