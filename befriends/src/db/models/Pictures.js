import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Pictures = sequelize.define(
    'pictures', {
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
    }, {
      freezeTableName: true,
      timestamps: false
    }
  )


  export default Pictures;

