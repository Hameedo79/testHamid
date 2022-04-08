import { Controller, Get, Query, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   console.log('post');
  //   return 'This action adds a new cat';
  // }

  // @Get('fetchAll')
  // fetchAll(): any {
  //   return this.appService.getTodos();
  // }

  // @Get('fetchOne/:id')
  // fetchOne(@Param('id') id: string): any {
  //   console.log(id);
  //   return this.appService.getTodo(id);
  // }

  // @Put('update/:id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   console.log('put');
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete('delete/:id')
  // remove(@Param('id') id: string) {
  //   console.log('delete');
  //   return `This action removes a #${id} cat`;
  // }
}
