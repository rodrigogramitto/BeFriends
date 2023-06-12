import express from 'express';
import Controller from '../../db/controllers/controller.js';


const router = express.Router({ mergeParams: true });

router.get('/user/:username?', (req, res) => {
  Controller.getUser(req.query.username)
  .then((user) => {
    res.send(user)
  })
  .catch((err) => {
    res.send(err)
  })
  res.send('pineapple')
})

export default router;