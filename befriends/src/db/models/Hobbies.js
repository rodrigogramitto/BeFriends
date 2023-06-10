import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Hobbies = sequelize.define(
  'hobbies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

export default Hobbies;