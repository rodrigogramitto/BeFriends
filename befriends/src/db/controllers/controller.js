import Model from '../models/index.js';

const Controller = {
  getUser: async (username) => {
    console.log(username);
    try {
      const user = await Model.Userinfo.findOne({
        where: { username: username.username}
      })
      return user
    } catch (err) {
      return err.data
    }
  },

  addUser: async (user) => {
    console.log(user)
    try {
      Model.Userinfo.create(user)
    } catch (err) {
      return err.data
    }
  }
}

export default Controller;