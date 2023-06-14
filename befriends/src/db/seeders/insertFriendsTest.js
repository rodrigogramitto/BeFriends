import Model from '../../db/models/index.js';

Model.Friend.create({
user_id: 1,
friend_user_id: 2,
})

Model.Friend.create({
  user_id: 1,
  friend_user_id: 3,
})

Model.Friend.create({
  user_id: 1,
  friend_user_id: 4,
})

Model.Friend.create({
    user_id: 1,
    friend_user_id: 5,
  })

Model.Friend.create({
    user_id: 1,
    friend_user_id: 6,
})

Model.Friend.create({
      user_id: 1,
      friend_user_id: 7,
})

Model.Friend.create({
  user_id: 2,
  friend_user_id: 3,
})

  Model.Friend.create({
    user_id: 2,
    friend_user_id: 4,
})

Model.Friend.create({
    user_id: 3,
    friend_user_id: 4,
})

Model.Friend.create({
      user_id: 3,
      friend_user_id: 5,
})

Model.Friend.create({
      user_id: 4,
      friend_user_id: 6,
})

Model.Friend.create({
        user_id: 4,
        friend_user_id: 1,
})

