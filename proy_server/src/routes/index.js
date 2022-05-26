const express = require('express');
const userRouter = require('./user.router')

function routerApi(my_app){
  const router = express.Router();
  /* Endpoint estático: http://localhost:4000/api/v1 */
  my_app.use('/api/v1', router);
  /* Endpoint estático: http://localhost:4000/api/v1/superheroes */
  router.use('/users', userRouter);
}
module.exports = routerApi