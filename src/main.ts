import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const port = configService.get<number>('PORT', { infer: true });
  await app.listen(3000);
  console.log(
    `server is successfully running in the port of http://localhost:${port}`,
  );
}
bootstrap();
