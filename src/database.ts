import { knex as setupKnex, Knex } from "knex";

const ConfigKex: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: "./db/app.db",
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
};
export const knex = setupKnex(ConfigKex);
export default ConfigKex;
