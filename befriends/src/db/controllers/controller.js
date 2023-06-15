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

  getUsersByCircleId : async (circleId) => {
    try {
      const users = await Model.Userinfo.findAll({
        attributes: ['id', 'username'],
        include: [
          {
            model: Model.Usercircle,
            where: { circle_id: circleId },
            attributes: [],
          },
        ],
      });

      return users;
    } catch (error) {
      console.log('Error retrieving users:', error);
      throw error;
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

  getCircles: async () => {
    try {
      const circles = await Model.Circle.findAll();
      return circles;
    } catch (err) {
      console.error(err)
      return "Error retrieving circles."
    }
  },

  addFriend: async (friend) => {
    try{
      const newFriend = await Model.Friend.create(friend);
      return newFriend;
    } catch (err) {
      console.error(err)
      return "Error adding friend."
    }
  },

  deleteFriend: async (userId, friendUserId) => {
    try {
      await Model.Friend.destroy({
        where: {
          user_id: userId,
          friend_user_id: friendUserId
        }
      })
      return "Friend deleted successfully."
    } catch (err) {
      console.error(err)
      return "Error deleting friend."
    }
  },


  getDiscoverInfo: async (id) => {
    try{
      const query = `SELECT userinfo.id, userinfo.firstname, userinfo.lastname, userinfo.birthday, userinfo.location,
      (SELECT JSON_AGG(hobbies.hobby) FROM hobbies WHERE userinfo.id = hobbies.user_id) as hobbies,
      (SELECT JSON_AGG(pictures.url) FROM pictures WHERE userinfo.id = pictures.user_id) as photos
    FROM userinfo
    WHERE userinfo.id != ${id}
    GROUP BY userinfo.id;`

      const discoverInfo = await sequelize.query(query);
      return discoverInfo;

    } catch (err) {
      console.error(err)
      return "Error adding friend."
    }
  },

  areUsersFriends: async (userId, friendUserId) => {
    try {
      const firstRelation = await Model.Friend.findOne({
        where: {
          user_id: userId,
          friend_user_id: friendUserId
        }
      });
      const secondRelation = await Model.Friend.findOne({
        where: {
          user_id: friendUserId,
          friend_user_id: userId
        }
      });

      if (firstRelation && secondRelation) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return console.error(err)
    }
  },

  createFriendCircle: async (pair) => {
    try {
      const existingCircle = await Model.Circle.findOne({ where: { name: pair.circlename } });

      if (existingCircle) {
        return "Circle already exists!"
      }

      const newCircle = await Model.Circle.create({
        name: pair.circlename
        });
      const addedUserToCircle = await Model.Usercircle.create({
        user_id: pair.userid,
        circle_id: newCircle.id
      })
      return addedUserToCircle;
    } catch (err) {
      console.error(err);
      return "Error ocurred while creating circle.";
    }
  },

  //pair takes in user id and circle id as properties
  joinFriendCircle: async (pair) => {
    try {
      const userinCircle = await Model.Usercircle.findOne({ where: { user_id: pair.userid, circle_id: pair.circleid } });

      if (userinCircle) {
        return "User already in friend circle!"
      }

      const addedUserToCircle = await Model.Usercircle.create({ user_id: pair.userid, circle_id: pair.circleid })
      return addedUserToCircle;
    } catch (err) {
      console.error(err);
      return "Error ocurred while adding user to friend circle.";
    }
  },
}


export default Controller;