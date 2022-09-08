import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AirportModule } from './airport/airport.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AirportEntity } from './entity/airport.entity';
import { BookEntity } from './entity/book.entity';
import { FlightEntity } from './entity/flight.entity';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [
      AirportModule,
      BookModule,
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '12341234',
          database: 'airlines',
          entities: [
            AirportEntity,
            BookEntity,
            FlightEntity
          ],
          synchronize: true
      }),
      FlightModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
