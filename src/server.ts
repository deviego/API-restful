import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async() => {
  const table = await knex('sqlite_schema')
  return table
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('server Running'))
