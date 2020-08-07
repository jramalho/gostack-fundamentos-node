import { Router } from 'express';
import appointmentRouter from './appointment.routes';
import usersRouter from './user.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/user', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
