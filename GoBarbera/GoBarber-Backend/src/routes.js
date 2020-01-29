import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'as F12',
    email: 'd1@sasaasgmail.com12',
    password_hash: '1as23asa12',
  });
  return res.json(user);
});

export default routes;
