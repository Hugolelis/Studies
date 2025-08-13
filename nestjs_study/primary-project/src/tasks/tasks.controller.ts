import { Controller, Body, Get, Param, Post, Query, Patch, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService: TasksService){}

    @Get() 
    routeTasks() {
        return this.TasksService.routeTasks()
    }

    @Get('/find/:id')
    findOneTask(@Param('id') id: string) {
        console.log(id)
        return this.TasksService.findOne(id)
    }
    
    @Get('/alltasks') 
    findAlltasks(@Query() queryParam: any) {
        console.log(queryParam)
        return this.TasksService.findAll()
    }

    @Post('/create')
    createTask(@Body() body: any) {
        return this.TasksService.create(body)
        
    }

    @Patch(":id")
    updateTask(@Param("id") id: String, @Body() Body: any) {
        console.log("ID", id)
        console.log("Body", Body)
    }

    @Delete(":id")
    deleteTask(@Param("id") id: String) {

    }
}
