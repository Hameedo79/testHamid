import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants';
import { databaseConfig } from './database.config';
import { Todo } from '../../modules/todo/todo.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config: any = databaseConfig;
        const sequelize = new Sequelize(config);
        sequelize.addModels([Todo]);
        await sequelize.sync();
        return sequelize;
    },
}];