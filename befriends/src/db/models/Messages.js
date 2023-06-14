import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Messages = sequelize.define(
  'message', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true
    // },
    circle_chat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    direct_chat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true
  }
)

// id serial PRIMARY KEY,
// circle_chat_id int,
// direct_chat_id int,
// user_id int,
// message varchar,
// date bigint,
// FOREIGN KEY (user_id) REFERENCES userinfo (id),
// FOREIGN KEY (direct_chat_id) REFERENCES direct (id),
// FOREIGN KEY (circle_chat_id) REFERENCES usercircle (id)

export default Messages;