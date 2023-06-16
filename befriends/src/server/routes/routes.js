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

router.get('/chats/:userid', (req, res) => {
  Controller.getUserChats(req.params.userid)
  .then((chats) => {
    res.status(200).send(chats);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

router.post('/messages', (req, res) => {
  console.log('Request body', req.body);
  Controller.addMessage(req.body)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log('Error inserting message', err);
    res.send(err);
  })
});

router.get('/usernames/:chatid', (req, res) => {
  Controller.getUsersByCircleId(req.params.chatid)
  .then((usernames) => {
    res.status(200).send(usernames);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
});

router.post('/circles', (req, res) => {
  Controller.createFriendCircle(req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })
})

//takes user id and friend circle id!
router.post('/usercircle', (req, res) => {
  Controller.joinFriendCircle(req.body)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })
})

router.get('/circles', (req, res) => {
  Controller.getCircles()
  .then((circles) => {
    res.send(circles)
  })
  .catch((err) => {
    res.send(err)
  });

})

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
});

router.post('/hobby', (req, res) => {
  Controller.addHobby(req.body)
  .then((response) => {
    res.send(response)
  })
  .catch((err) => {
    res.send(err)
  });
});

router.delete('/hobby', (req, res) => {
  Controller.deleteHobby(req.body)
  .then((response) => {
    res.send(response)
  })
  .catch((err) => {
    res.send(err)
  });
});

router.put('/user', (req, res) => {
  Controller.updateUser(req.body)
  .then((updatedUser) => {
    res.send(updatedUser)
  })
  .catch((err) => {
    res.send(err)
  });
});


export default router;