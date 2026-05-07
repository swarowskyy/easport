import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { Time } from './entities/time.entity';
import { TimesService } from './time.service';

@Controller('times')
export class TimesController {
  constructor(private readonly timesService: TimesService) {}

  @Get()
  listar() {
    return this.timesService.findAll();
  }

  @Post()
  criar(@Body() dados: Partial<Time>) {
    return this.timesService.create(dados);
  }

  @Patch(':id/vitoria')
  vitoria(@Param('id') id: string) {
    return this.timesService.adicionarVitoria(+id);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.timesService.remover(+id);
  }
}