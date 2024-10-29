import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';
// 创建一个控制器
@Controller()
class AppController {
  @Get('/nest')
  getRootRoute() {
    return 'hi! I am a single file nest-app';
  }
  @Get()
  getHello(): string {
    return 'start index';
  }
}
// 创建一个模块
@Module({
  controllers: [AppController],
})
class AppModule {}

// 启动函数
async function bootstrap() {
  // 创建一个nestjs实例
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
