import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Direct = sequelize.define(
    'direct', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoincrement: true
      },
      user_id1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }
  );

  export default Direct;

