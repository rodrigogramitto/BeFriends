import Direct from './Direct.js';
import Circle from './Circle.js';
import Events from './Events.js';
import Friend from './Friend.js';
import Hobbies from './Hobbies.js';
import Messages from './Messages.js';
import Pictures from './Pictures.js';
import Usercircle from './Usercircle.js';
import Userinfo from './Userinfo.js';

const Model = {
  Direct,
  Circle,
  Events,
  Friend,
  Hobbies,
  Messages,
  Pictures,
  Usercircle,
  Userinfo,
}

// Relationships
Userinfo.hasMany(Pictures, { foreignKey: 'user_id' })
Userinfo.hasMany(Hobbies, { foreignKey: 'user_id' })
Userinfo.hasMany(Friend, { foreignKey: 'friend_user_id' })
Userinfo.hasMany(Direct, { foreignKey: 'user_id1' })
Userinfo.hasMany(Direct, { foreignKey: 'user_id2' })
Userinfo.hasMany(Usercircle, { foreignKey: 'user_id' })
Circle.hasMany(Usercircle, { foreignKey: 'circle_id' })
Userinfo.hasMany(Messages, { foreignKey: 'user_id' })
Direct.hasMany(Messages, { foreignKey: 'direct_chat_id' })
Usercircle.hasMany(Messages, { foreignKey: 'circle_chat_id' })
Circle.hasMany(Events, { foreignKey: 'circle_id' })

Pictures.belongsTo(Userinfo, { foreignKey: 'user_id' })
Hobbies.belongsTo(Userinfo, { foreignKey: 'user_id' })
Friend.belongsTo(Userinfo, { foreignKey: 'friend_user_id' })
Direct.belongsTo(Userinfo, { foreignKey: 'user_id1' })
Direct.belongsTo(Userinfo, { foreignKey: 'user_id2' })
Usercircle.belongsTo(Userinfo, { foreignKey: 'user_id' })
Usercircle.belongsTo(Circle, { foreignKey: 'circle_id' })
Messages.belongsTo(Userinfo, { foreignKey: 'user_id' })
Messages.belongsTo(Direct, { foreignKey: 'direct_chat_id' })
Messages.belongsTo(Usercircle, { foreignKey: 'circle_chat_id' })
Events.belongsTo(Circle, { foreignKey: 'circle_id' })

export default Model;