import { Logger } from '@nestjs/common';
import Knex from 'knex';
import { Model } from 'objection';
import * as KnexConfig from '../../knexfile';

export class DatabaseModel {
  static connect() {
    try {
      Logger.log('Connecting to Database', 'DatabaseModel.connect');

      // Initialize knex.
      const knex = Knex(KnexConfig);

      Model.knex(knex);
      Logger.log('Connected to Database successfully', 'DatabaseModel.connect');
    } catch (e) {
      Logger.error('Error connecting to database: ' + e.message);
    }
  }
}
