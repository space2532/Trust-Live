import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS 설정 (프론트엔드와 통신을 위해)
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Vite 개발 서버 주소
    credentials: true,
  });
  
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
