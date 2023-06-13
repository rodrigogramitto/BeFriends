import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Hobbies = sequelize.define(
  'hobbies', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
)

export default Hobbies;