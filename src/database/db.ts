import { Subject } from "../models/subjects.model";

export const db: {[key: string]: Subject;} = {
  math: {
    name: 'Matemática',
    exercises: [
      {
        id: 1,
        question:
          'Podemos afirmar que a eq. x² – 2x +1 = 0 possui:',
        alternatives: [
          'A) Nenhuma solução real.',
          'B) Uma única solução real.',
          'C) Duas soluções reais.',
          'D) Três soluções reais.',
          'E) Infinitas soluções reais.',
        ],
        correctAnswer: 'B) Uma única solução real.',
      },
    ],
  },
  history: {
    name: 'História',
    exercises: [
      {
        id: 1,
        question: 'Quais destes eram grandes navegadores?',
        alternatives: [
          'A) Jean-Jacques Rosseau e René Descartes.',
          'B) Isaac Newton e Einstein.',
          'C) Bartolomeu Dias e Vasco da Gama.',
          'D) Tom Cruise e Brad Pitt.',
        ],
        correctAnswer: 'C) Bartolomeu Dias e Vasco da Gama.',
      },
    ],
  },
  science: {
    name: 'Ciências',
    exercises: [
      {
        id: 1,
        question: 'Qual dos seguintes é o mais denso:',
        alternatives: [
          'A) Mercúrio',
          'B) Leite Integral',
          'C) Cobre',
          'D) Água',
        ],
        correctAnswer: 'A) Mercúrio',
      },
    ],
  },
  portuguese: {
    name: 'Português',
    exercises: [
      {
        id: 1,
        question: 'Assinale a frase em que à ou às está mal empregado.',
        alternatives: [
          'A) Amores à vista.',
          'B) Pintura à óleo.',
          'C) Vou à escola.',
          'D) Irei às sete horas.',
        ],
        correctAnswer: 'B) Pintura à óleo.',
      },
    ],
  },
  geography: {
    name: 'Geografia',
    exercises: [
      {
        id: 1,
        question: 'Qual a capital do Ceará?',
        alternatives: [
          'A) Belém',
          'B) Fortaleza',
          'C) Paraíba',
          'D) Maceió',
          'E) Mato Grosso',
        ],
        correctAnswer: 'B) Fortaleza',
      },
    ],
  },
  arts: {
    name: 'Artes',
    exercises: [
      {
        id: 1,
        question: 'Quem pintou o quadro "O Grito"',
        alternatives: [
          'A) Picasso',
          'B) Michelangelo',
          'C) Salvador Dalí',
          'D) Edvard Munch',
          'E) Ayrton Senna',
        ],
        correctAnswer: 'D) Edvard Munch',
      },
    ],
  },
};
