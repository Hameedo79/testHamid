import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { todoProviders } from './todo.providers';

@Module({
  providers: [TodoService,...todoProviders],
  exports: [TodoService],
})
export class TodoModule {}
