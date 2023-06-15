import Model from '../models/index.js';
import sequelize from '../sequelize.js';

const Controller = {

  getUser: async (username) => {
    try {
      const user = await Model.Userinfo.findOne({
        include: [
          {
            model: Model.Usercircle,
            attributes: ['circle_id']
          },
          {
          model: Model.Pictures,
          attributes: ['url', 'caption']
          }
        ],
        where: { username: username.username}
      })
      return user
    } catch (err) {
      console.log(err)
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

  addMessage: async (message) => {
    try {
      const newMessage = await Model.Messages.create(message);
      return newMessage;
    } catch (err) {
      console.log(err);
      return err.data;
    }
  },

  getUserChats: async (userId) => {
    try {
      const userChats = await Model.Usercircle.findAll({
        where: { user_id: userId },
        include: {
          model: Model.Circle,
          attributes: ['id', 'name'],
        },
      });

      return userChats.map((userChat) => ({
        chatId: userChat.circle_id,
        chatName: userChat.circle.name,
      }));
    } catch (err) {
      console.error('Error retrieving user chats:', err);
      return [];
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
  },

  addEvent: async (event) => {
    try {
      const existingEvent = await Model.Events.findOne({ where: { name: event.name } });

      if (existingEvent) {
        return "Event already exists."
      }

      const newEvent = await Model.Events.create(event)
      return newEvent;
    } catch (err) {
      console.error(err);
      return "Error ocurred while saving event.";
    }
  },

  getEvents: async () => {
    try {
      const events = await Model.Events.findAll()
      return events;
    } catch (err) {
      console.error(err)
      return "Error retrieving events."
    }
  },

  addFriends: async (friend) => {
    try{
      const newFriend = await Model.Friend.create(friend);
      return newFriend;
    }catch (err) {
      console.error(err)
      return "Error adding friend."
    }
  },

  updateUser: async (user) => {
    console.log(user)
    try {
      const updatedUser = await Model.Userinfo.update(user, {
        where: { id: user.id}
      })
      // console.log('updated:', updatedUser)
      return updatedUser
    } catch (err) {
      console.log(err)
      return err.data
    }
  }
}

export default Controller;