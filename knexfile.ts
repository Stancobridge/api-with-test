import { Env } from './src/config';

// Update with your config settings.

class KnexConfig {
  static getConnection() {
    const {
      DATABASE_HOST,
      DATABASE_NAME,
      DATABASE_PASWORD,
      DATABASE_PORT,
      DATABASE_USER,
    } = Env.getAll();

    return {
      client: 'mysql2',
      useNullAsDefault: true,
      debug: false,
      connection: {
        host: DATABASE_HOST,
        database: DATABASE_NAME,
        user: DATABASE_USER,
        password: DATABASE_PASWORD,
        port: DATABASE_PORT,
      },
      pool: {
        min: 0,
        max: 10,
      },
      migrations: {
        directory: './src/database/migrations',
        extension: 'ts',
      },
      seeds: {
        directory: './src/database/seeds',
        extension: 'ts',
      },
    };
  }

  static getEnvConnection() {
    const config = KnexConfig.getConnection();
    const nodeEnv = Env.get('NODE_ENV');

    return {
      development: config,
      staging: config,
      prodiction: config,
    }[nodeEnv];
  }
}

module.exports = KnexConfig.getEnvConnection();
