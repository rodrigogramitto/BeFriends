import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Events = sequelize.define(
  'events', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    start_date: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    circle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
)

export default Events;
