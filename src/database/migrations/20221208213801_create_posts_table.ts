import { Knex } from 'knex';
import { DatabaseTables } from '../database.table';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(
    DatabaseTables.posts,
    (tableBuilder: Knex.CreateTableBuilder) => {
      tableBuilder.bigIncrements('id').unique().primary();
      tableBuilder.string('title');
      tableBuilder.string('body');
      tableBuilder.timestamps(true, true);
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(DatabaseTables.posts);
}
