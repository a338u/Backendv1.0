import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
const configService = new ConfigService();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config/.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(configService.get<string>('DB_URL')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
