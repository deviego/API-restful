
import { knex as setupKnex, Knex } from "knex";
import { env } from "./env";

if(!process.env.DATABASE_URL){
  throw new Error('env undefined');
  
}
const ConfigKex: Knex.Config = {
  client: "sqlite",
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
};
export const knex = setupKnex(ConfigKex);
export default ConfigKex;
