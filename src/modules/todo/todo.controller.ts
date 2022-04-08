import { Controller, Body, Get, Post, Request, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get('fetchAll')
    fetchAll(): any {
        return this.todoService.fetchAll();
    }

    @Get('fetchOne/:id')
    fetchOne(@Param('id') id: number): any {
        return this.todoService.fetchOne(id);
    }

    @Post('add')
    async add(@Body() todo: TodoDto, @Request() req): Promise<Todo> {
        return await this.todoService.create(todo);

    }

    @Put('update/:id')
    async update(@Param('id') id: number, @Body() todo: TodoDto): Promise<any> {
        const numberOfAffectedRows = await this.todoService.update(id, todo);

        return { message: 'success' };
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
        const deleted = await this.todoService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('Delete failed');
        }

        return this.todoService.fetchAll();
    }


}