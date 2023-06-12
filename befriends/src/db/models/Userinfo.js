import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Userinfo = sequelize.define('userinfo', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  banner_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false
});

export default Userinfo;
