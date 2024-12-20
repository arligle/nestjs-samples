import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // process.env.PORT = '9900';
  const port = process.env.PORT || 3000;
  console.log(port);
  console.log(process.env.PORT);
  await app.listen(port);
}
bootstrap();
