import { BadRequestException, NotFoundException } from '@nestjs/common';
import { db } from '../database/db';
import { Question } from '../models/question.model';

export const validateIfDbHasGivenSubject = (subject: string): void => {
  if (!db.hasOwnProperty(subject)) {
    throw new NotFoundException(
      'Não foi encontrada uma matéria com esse nome no banco de dados.',
    );
  }
};

export const validateQuestionInput = (question: Question): void => {
  if (!question.question) {
    throw new BadRequestException('Deve ser informada a pergunta!');
  }
  if (!question.correctAnswer) {
    throw new BadRequestException(
      'Deve ser informada a resposta correta para a pergunta!',
    );
  }
  if (!question.alternatives) {
    throw new BadRequestException('Devem ser informadas as opções de resposta para a pergunta!');
  }
  if (question.alternatives.length < 4) {
    throw new BadRequestException('O número de alternativas mínimo é 4.');
  }
};

export const validateIfFoundGivenQuestionById = (questions: Question[]) => {
    if (!questions.length) {
        throw new NotFoundException(
          'Não existe uma questão relacionada a este id para a matéria especificada.',
        );
      }
}
