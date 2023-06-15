import express from 'express';
import Controller from '../../db/controllers/controller.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router({ mergeParams: true });


router.get('/discoverInfo/:id', (req, res) => {
    Controller.getDiscoverInfo(req.params.id)
    .then((response) => {
      res.send(response[0])
    })
    .catch((err) => {
      res.send(err)
    })
  })
  
  router.post('/friends/:user_id', (req, res) => {
    const userId = req.params.user_id;
    const friend = {
      user_id: userId,
      friend_user_id: req.body.friend_user_id
    }
    Controller.addFriend(friend)
    .then((friends) => {
      res.send(friends)
    })
    .catch((err) => {
      res.send(err);
    })
  });
  
  router.delete('/friends/:user_id/:friend_user_id', (req, res) => {
    const { user_id, friend_user_id } = req.params;
    Controller.deleteFriend(user_id, friend_user_id)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => res.send(err))
  });
  
  router.get('/friends/:user_id/:friend_user_id', (req, res) => {
    const { user_id, friend_user_id } = req.params;
    Controller.areUsersFriends(user_id, friend_user_id)
    .then((response) => res.send(response))
    .catch((err) => res.send(err))
  });

  router.get

  export default router;