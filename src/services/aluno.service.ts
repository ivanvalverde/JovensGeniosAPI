import { Injectable } from '@nestjs/common';
import { dbAluno } from 'src/database/dbAluno';

@Injectable()
export class AlunoService {
  getExperience(): number {
    return dbAluno.experiencia;
  }

  addExperience(quantity: string): string {
    dbAluno.experiencia = dbAluno.experiencia + Number(quantity);
    return 'A operação foi um sucesso';
  }
}
