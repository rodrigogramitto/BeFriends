import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';


const Circle = sequelize.define(
    'circle', {
      // id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: true,
      //   autoincrement: true
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )

  export default Circle;

