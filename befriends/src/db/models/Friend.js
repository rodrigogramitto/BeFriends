import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Friend = sequelize.define(
    'friend', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friend_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }
  )

  export default Friend;

