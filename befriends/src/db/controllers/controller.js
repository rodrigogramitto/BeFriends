import Model from '../models/index.js';
import sequelize from '../sequelize.js';

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
      console.log(err);
      return err.data;
    }
  },

  getMessages: async (chatType, chatId) => {
    let column = (chatType ? 'circle_chat_id' : 'direct_chat_id')
    console.log(column)
    try {
      const messages = await sequelize.query(`SELECT * FROM message WHERE message.${column} = ${chatId};`)
      return messages;
    } catch (err) {
      return err.data;
    }
  },

  getHobbies: async (userId) => {
    try {
      const hobbies = await Model.Hobbies.findAll(
        { where: {user_id: userId},
        attributes: ['hobby']})
      return hobbies;
    } catch (err) {
      return err
    }
  },

  getFriends: async (userId) => {
    try {
      const friends = await Model.Friend.findAll({
        include: [
          {
            model: Model.Userinfo,
            attributes: ['firstname', 'lastname']
          }
        ],
        where: { user_id: userId },
        attributes: ['user_id']
      });
      return friends.map((friend) => {
        return {firstname: friend.userinfo.firstname, lastname: friend.userinfo.lastname}
      })
    } catch (err) {
      return err.data;
    }
  }
}

export default Controller;