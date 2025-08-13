import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    routeTasks() {
        return 'Rota de tasks'
    }

    findAll() {
        return 'retornar tasks'
    }

    findOne(id: string) {
        return `Uma tarefa do id ${id}`
    }

    create(body: any) {
        const { name, desc } = body
        return `${name}, ${desc}`
    } 
}
