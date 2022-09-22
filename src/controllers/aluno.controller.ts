import { Controller, Get, Param, Post } from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get('experience')
  getExperiencePoints(): number {
    return this.alunoService.getExperience();
  }

  @Post('experience/add/:quantity')
  addExperience(@Param('quantity') quantity: string): string {
    return this.alunoService.addExperience(quantity);
  }
}
