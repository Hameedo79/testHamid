import { Injectable, Inject } from '@nestjs/common';

import { Todo } from './todo.entity';
import { TodoDto } from './dto/todo.dto';
import { TODO_REPOSITORY } from '../../core/constants';

@Injectable()
export class TodoService {
    constructor(@Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todo) { }

    async create(todo: TodoDto): Promise<Todo> {
        return await this.todoRepository.create<Todo>(todo);
    }

    async fetchAll(): Promise<Todo[]> {
        return await this.todoRepository.findAll<Todo>();
    }

    async fetchOne(id: number): Promise<Todo> {
        return await this.todoRepository.findOne<Todo>({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows] = await this.todoRepository.update({ ...data }, { where: { id } });

        if (numberOfAffectedRows) {
            return 'Update succeed';
        } else {
            return 'Update failed';
        }
    }

    async delete(id) {
        return await this.todoRepository.destroy({ where: { id } });
    }
}
