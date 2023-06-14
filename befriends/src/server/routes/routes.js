import express from 'express';
import Controller from '../../db/controllers/controller.js';


const router = express.Router({ mergeParams: true });

router.get('/user/:username', (req, res) => {
  Controller.getUser(req.params)
  .then((user) => {
    res.send(user);
  })
  .catch((err) => {
    res.send(err);
  })
});

router.get('/chats/:chattype/:chatid', (req, res) => {
  Controller.getMessages(req.params.chattype, req.params.chatid)
    .then((messages) => {
      res.status(200).send(messages[0]);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.post('/messages', (req, res) => {
  Controller.addMessage(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err);
  })
});

router.post('/user', (req, res) => {
  Controller.addUser(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err);
  })
});

router.get('/hobbies/:user_id', (req, res) => {
  Controller.getHobbies(req.params.user_id)
  .then((hobbies) => {
    res.send(hobbies)
  })
  .catch((err) => {
    res.send(err.data)
  })
  // res.send(req.params);
});

router.get('/friends/:user_id', (req, res) => {
  Controller.getFriends(req.params.user_id)
  .then((friends) => {
    res.send(friends)
  })
  .catch((err) => {
    res.send(err);
  })
});

router.post('/event', (req, res) => {
  Controller.addEvent(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.send(err)
  })
});

router.get('/event', (req, res) => {
  Controller.getEvents()
  .then((events) => {
    res.send(events)
  })
  .catch((err) => {
    res.send(err)
  });

})


export default router;