import express from 'express';
import Controller from '../../db/controllers/controller.js';

const router = express.Router({ mergeParams: true });

router.get('/user/:username', (req, res) => {
console.log(req.params.username)
  // Controller.getUser(req.params)
  // .then((user) => {
  //   res.send(user)
  // })
  // .catch((err) => {
  //   res.send(err)
  // })
  res.send()
})

router.get('/chats/:chattype/:chatid', (req, res) => {
  Controller.getMessages(req.params.chatType, req.params.chatid)
    .then((messages) => {
      res.status(200).send(messages);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})


export default router;