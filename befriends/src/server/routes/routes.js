
import express from 'express';
import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;

const router = express.Router();

router.get('/', (req, res, next) => {
res.render('index', {
title: 'Auth0 Webapp sample Nodejs',
isAuthenticated: req.oidc.isAuthenticated()
});
});

router.get('/profile', requiresAuth(), (req, res, next) => {
res.render('profile', {
userProfile: JSON.stringify(req.oidc.user, null, 2),
title: 'Profile page'
});
});

export default router;