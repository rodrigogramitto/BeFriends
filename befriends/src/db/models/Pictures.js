import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Pictures = sequelize.define(
    'pictures', {
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
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  )


  export default Pictures;

