import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { ProductEntity } from './entity/product.entity';

@Module({
  imports: [
    UserModule, 
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '43.200.235.85',
      port: 3306,
      username: 'root',
      password: '12341234',
      database: 'investments',
      entities: [
        UserEntity,
        ProductEntity
      ],
      synchronize: true
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}