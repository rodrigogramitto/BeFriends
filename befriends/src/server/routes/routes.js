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

export default router;