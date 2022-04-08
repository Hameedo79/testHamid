import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './modules/todo/todo.module';
import { TodoController } from './modules/todo/todo.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, TodoModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'build'),
  }),],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule { }
