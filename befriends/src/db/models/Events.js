import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Events = sequelize.define(
  'events', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
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
    }
  },
  {
    freezetable: true,
    timestamps: false
  }
)

export default Events;
