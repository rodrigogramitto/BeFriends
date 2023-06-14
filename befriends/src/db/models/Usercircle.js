import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const UserCircle = sequelize.define(
  'usercircle', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoincrement: true
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    circle_id: {
      type: DataTypes.INTEGER,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

export default UserCircle;
