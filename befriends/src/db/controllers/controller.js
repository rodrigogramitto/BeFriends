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