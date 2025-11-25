import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  await app.listen(parseInt(process.env.PORT || '8000', 10));
  console.log(`API running on http://localhost:${process.env.PORT || 8000}`);
}
bootstrap();
