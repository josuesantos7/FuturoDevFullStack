const {Router} = require('express');
const userController = require('../controllers/UserController');

const userRouter = new Router()

userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findById);
userRouter.post('/', userController.createNewUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;