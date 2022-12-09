import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from './config';
import { DatabaseModel } from './database';

class Server {
  static async start() {
    const SERVER_PORT = Env.get('SERVER_PORT');

    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    DatabaseModel.connect();

    await app.listen(SERVER_PORT, () => {
      Logger.log(
        `Http Server started and running on port ${SERVER_PORT}`,
        'Server.app',
      );
    });
  }
}

// start server
Server.start().catch((e) => {
  Logger.error('Error occured while starting server: ' + e.message, 'Server');
});
