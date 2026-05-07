import { Module } from '@nestjs/common';
// Mude de TimeService para TimesService
import { TimesService } from './time.service'; 
// Mude de TimeController para TimesController
import { TimesController } from './time.controller'; 

@Module({
  controllers: [TimesController], // Ajuste aqui também
  providers: [TimesService],     // E aqui também
})
export class TimeModule {}