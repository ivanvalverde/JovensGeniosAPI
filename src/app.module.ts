import { Module } from '@nestjs/common';
import { AlunoController } from './controllers/aluno.controller';
import { EadController } from './controllers/ead.controller';
import { AlunoService } from './services/aluno.service';
import { EadService } from './services/ead.service';

@Module({
  imports: [],
  controllers: [EadController, AlunoController],
  providers: [EadService, AlunoService],
})
export class AppModule {}
