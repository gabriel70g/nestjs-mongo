import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          dbName,
          user,
          password,
          port,
          host,
          connection,
        } = configService.mongo;

        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          port,
          dbName,
        } = configService.mongo;

        //mongodb://root:root@localhost:26017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['MONGO', MongooseModule],
})
export class DatabaseModule {}
