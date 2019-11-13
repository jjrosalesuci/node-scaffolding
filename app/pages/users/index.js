const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const User = require('../../../models/user');
const UsersPage = require('./view');

router.get('/', (req, res, next) => {
  User.getAllUsers()
      .then(users => {
        const initialState = {
          users,
        };

        const content = renderToString(<UsersPage initialState={initialState}/>);

        res.render('template', {
          pageName: 'users',
          pageTitle: 'Users List',
          initialState,
          content
        });
      })
      .catch(err => {
        next(err);
      });
});

module.exports = router;