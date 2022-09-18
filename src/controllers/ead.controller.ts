import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Question } from '../models/question.model';
import { EadService } from '../services/ead.service';

@Controller('ead')
export class EadController {
  constructor(private readonly eadService: EadService) {}

  @Get('subjects')
  getSubjects(): string[] {
    return this.eadService.getSubjects();
  }

  @Get(':subject/questions')
  getQuestionsFromSubject(@Param('subject') subject: string): Question[] {
    return this.eadService.getQuestionsFromSubject(subject);
  }

  @Get(':subject/questions/:id')
  getQuestionFromSubjectById(
    @Param('subject') subject: string,
    @Param('id') id: string,
  ): Question {
    return this.eadService.getQuestionFromSubjectById(subject, id);
  }

  @Post(':subject/questions/add')
  createNewQuestionForSubject(
    @Param('subject') subject: string,
    @Body() input: Question,
  ): string {
    return this.eadService.createNewQuestionForSubject(subject, input);
  }

  @Put(':subject/questions/:id/update')
  updateQuestionForSubject(
    @Param('subject') subject: string,
    @Param('id') id: string,
    @Body() input: Question,
  ): Question {
    return this.eadService.updateQuestionForSubject(subject, input, id);
  }

  @Delete(':subject/questions/:id/delete')
  deleteQuestionForSubject(
    @Param('subject') subject: string,
    @Param('id') id: string,
  ): string {
    return this.eadService.deleteQuestionForSubject(subject, id);
  }
}
