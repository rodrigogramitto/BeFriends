import express from 'express';
import Controller from '../../db/controllers/controller.js';


const router = express.Router({ mergeParams: true });

router.get('/user/:username', (req, res) => {
  // console.log(req.params);
  Controller.getUser(req.params)
  .then((user) => {
    res.send(user)
  })
  .catch((err) => {
    res.send(err)
  })
})

router.post('/user', (req, res) => {
  Controller.addUser(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.send(err.data);
  })
})

export default router;