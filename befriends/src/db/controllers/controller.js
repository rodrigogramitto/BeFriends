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
    try {
      const existingUser = await Model.Userinfo.findOne({ where: { username: user.username } });

      if (existingUser) {
        return "User already exists.";
      }

      const newUser = await Model.Userinfo.create(user);

      await user.hobbies.forEach((hobby) => Model.Hobbies.create({hobby: hobby, user_id: newUser.id}))
      return "User succesfully created"
    } catch (err) {
      return err.data;
    }
  },

  getMessages: async (chatType, chatId) => {
    let column = (chatType === 'circle' ? 'circle_chat_id' : 'direct_chat_id')
    try {
      const messages = await Model.Messages.findMany({
        where: {[column]: chatId}
      })
      return messages;
    } catch (err) {
      return err.data;
    }
  }
}

export default Controller;