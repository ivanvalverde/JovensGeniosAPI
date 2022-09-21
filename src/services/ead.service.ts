import { Injectable } from '@nestjs/common';
import { Question } from '../models/question.model';
import { db } from '../database/db';
import {
  validateIfDbHasGivenSubject,
  validateIfFoundGivenQuestionById,
  validateQuestionInput,
} from '../shared/validations';
import { Discipline } from '../models/discipline.model';

@Injectable()
export class EadService {
  getSubjects(): Discipline[] {
    const subjects: Discipline[] = [];
    for (const key in db) {
      subjects.push({ name: db[key].name, path: key });
    }
    return subjects;
  }

  getQuestionsFromSubject(subject: string): Question[] {
    validateIfDbHasGivenSubject(subject);
    return db[subject].exercises;
  }

  getQuestionFromSubjectById(subject: string, id: string): Question {
    validateIfDbHasGivenSubject(subject);
    const questionSelected = db[subject].exercises.filter(
      (question: Question) => {
        return question.id === Number(id);
      },
    );
    validateIfFoundGivenQuestionById(questionSelected);
    return questionSelected[0];
  }

  createNewQuestionForSubject(subject: string, question: Question): string {
    validateIfDbHasGivenSubject(subject);
    validateQuestionInput(question);

    db[subject].exercises.push({
      ...question,
      id: db[subject].exercises.length + 1,
    });
    return 'Questão criada com sucesso!';
  }

  updateQuestionForSubject(
    subject: string,
    question: Question,
    id: string,
  ): Question {
    validateIfDbHasGivenSubject(subject);
    validateQuestionInput(question);
    const questionSelected: Question[] = db[subject].exercises.filter(
      (question: Question) => {
        return question.id === Number(id);
      },
    );
    validateIfFoundGivenQuestionById(questionSelected);
    questionSelected[0] = {
      ...question,
      id: questionSelected[0].id,
    };
    db[subject].exercises[questionSelected[0].id - 1] = questionSelected[0];
    return questionSelected[0];
  }

  deleteQuestionForSubject(subject: string, id: string): string {
    validateIfDbHasGivenSubject(subject);
    const questionSelected: Question[] = db[subject].exercises.filter(
      (question: Question) => {
        return question.id === Number(id);
      },
    );
    validateIfFoundGivenQuestionById(questionSelected);
    const newQuestionsList: Question[] = db[subject].exercises.filter(
      (question: Question) => {
        return question.id !== Number(id);
      },
    );
    db[subject].exercises = newQuestionsList;
    return 'Deleção realizada com sucesso!';
  }
}
