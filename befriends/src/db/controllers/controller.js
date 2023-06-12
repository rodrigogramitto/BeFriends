import Model from '../models/index.js';

const Controller = {
  getUser: async (username) => {
    try {
      const user = await Model.Userinfo.findOne({
        where: { username: username}
      })
      return user
    } catch (err) {
      return err.data
    }
  }
}

export default Controller;