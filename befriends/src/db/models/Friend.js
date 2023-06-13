import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Friend = sequelize.define(
    'friend', {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friend_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  )

  export default Friend;

