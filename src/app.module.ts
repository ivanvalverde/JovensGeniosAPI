import { Module } from '@nestjs/common';
import { EadController } from './controllers/ead.controller';
import { EadService } from './services/ead.service';

@Module({
  imports: [],
  controllers: [EadController],
  providers: [EadService],
})
export class AppModule {}
