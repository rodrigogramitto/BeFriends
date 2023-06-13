import Model from '../../db/models/index.js';

Model.Friend.create({
user_id: 8,
friend_user_id: 1,
})

Model.Friend.create({
  user_id: 8,
  friend_user_id: 3,
  })