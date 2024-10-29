import { Module } from '@nestjs/common';
import { AppController, ConfigController } from './app.controller';
import { AppService } from './app.service';
import { TypedConfigModule, fileLoader } from 'nest-typed-config';
import { RootConfig } from './config';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: RootConfig,
      load: fileLoader({
        absolutePath: './src/config/.env.yaml', // 需要重新配置
        ignoreEnvironmentVariableSubstitution: false,
        ignoreEmptySearchPlaces: false,
      }),
    }),
  ],
  controllers: [AppController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
