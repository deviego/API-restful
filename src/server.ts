import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async() => {
  const table = await knex('sqlite_schema')
  return table
})


app
  .listen({
    port:env.PORT,
  })
  .then(() => console.log('server Running'))
