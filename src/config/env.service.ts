import * as dotenv from 'dotenv';
import { IEnv } from './env.interface';
dotenv.config();

export abstract class Env {
  static get(name: keyof IEnv): any {
    return Env.getAll()[name];
  }

  static getAll(): IEnv {
    return {
      SERVER_PORT: process.env.SERVER_PORT,
      DEVELOPMENT: process.env.DEVELOPMENT === 'true' ? true : false,
      DATABASE_PORT: Number(process.env.DATABASE_PORT),
      DATABASE_HOST: process.env.DATABASE_HOST,
      DATABASE_NAME: process.env.DATABASE_NAME,
      DATABASE_USER: process.env.DATABASE_USER,
      DATABASE_PASWORD: process.env.DATABASE_PASWORD,
      NODE_ENV: process.env.NODE_ENV,
    };
  }
}
