import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SentryFilter } from './sentry.filter';
import * as Sentry from '@sentry/node';
async function bootstrap() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: '1.0.0',
    environment: 'production',
    debug: true,
  });
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new SentryFilter());
  await app.listen(3000);
}
bootstrap();
