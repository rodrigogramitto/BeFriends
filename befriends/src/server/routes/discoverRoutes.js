import express from 'express';
import axios from 'axios';
import Controller from '../../db/controllers/controller.js';
import dotenv from 'dotenv';

dotenv.config();

const router2 = express.Router({ mergeParams: true });


router2.get('/discoverInfo/:id', (req, res) => {
    Controller.getDiscoverInfo(req.params.id)
    .then((response) => {
      res.send(response[0])
    })
    .catch((err) => {
      res.send(err)
    })
  })

  router2.post('/friends/:user_id', (req, res) => {
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

  router2.delete('/friends/:user_id/:friend_user_id', (req, res) => {
    const { user_id, friend_user_id } = req.params;
    Controller.deleteFriend(user_id, friend_user_id)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => res.send(err))
  });

  router2.get('/friends/:user_id/:friend_user_id', (req, res) => {
    const { user_id, friend_user_id } = req.params;
    Controller.areUsersFriends(user_id, friend_user_id)
    .then((response) => res.send(response))
    .catch((err) => res.send(err))
  });

  router2.get('/geolocation/:location', async (req, res) => {
    const { location } = req.params;
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${process.env.OPEN_CAGE_API_KEY}`);
      res.json(response.data.results[0].geometry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

  export default router2;