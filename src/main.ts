import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API-PDF')
    .setVersion('1.0')
    .addTag('pdf')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.use(helmet());
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
