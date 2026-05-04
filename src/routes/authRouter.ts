import { Router } from 'express';
import {
  registration,
  activation,
  login,
  refreshing,
  logout,
  forgotPassword,
  resetPassword,
} from '../controllers/authController';

export const authRouter = Router();

authRouter.post('/registration', registration);
authRouter.get('/activation/:activationToken', activation);
authRouter.post('/login', login);
authRouter.post('/refresh', refreshing);
authRouter.post('/logout', logout);

authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password/:resetToken', resetPassword);
