import { join } from 'path'
import { ConnectionOptions } from 'typeorm'
import { User } from './libs/user/api/shared/src';
import { Video } from './libs/article/api/shared/src';

const PROD_ENV = 'production'

const config = {
  host: 'localhost',
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
}

export const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'sql6.freemysqlhosting.net',
  port: 3306,
  username: 'sql6405909',
  password: 'uLX6AZai91',
  database: 'sql6405909',
  entities: [
    User,
    Video
  ],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: ['warn', 'error'],
  logger: process.env.NODE_ENV === PROD_ENV ? 'file' : 'debug',
  migrations: [
    join(__dirname, 'migrations/*{.ts,.js}')
  ],
  cli: {
    migrationsDir: 'src/migrations'
  }
}
