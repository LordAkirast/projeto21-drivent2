import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { handleApplicationErrors } from '@/middlewares';
<<<<<<< HEAD
import { usersRouter, authenticationRouter, eventsRouter, enrollmentsRouter } from '@/routers';
=======
import {
  usersRouter,
  authenticationRouter,
  eventsRouter,
  enrollmentsRouter,
  ticketsRouter,
  paymentsRouter,
} from '@/routers';
>>>>>>> 68b279a61970862fa99f0b4f6fbaa407a5e8536a
import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/users', usersRouter)
  .use('/auth', authenticationRouter)
  .use('/event', eventsRouter)
  .use('/enrollments', enrollmentsRouter)
<<<<<<< HEAD
=======
  .use('/tickets', ticketsRouter)
  .use('/payments', paymentsRouter)
>>>>>>> 68b279a61970862fa99f0b4f6fbaa407a5e8536a
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
